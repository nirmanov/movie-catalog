"use client";
import { fetchData, searchMovieTrailer } from "../../api/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MovieType } from "@/app/types/types";
import { capitalizeFirstLetter, formatMinutesToTime } from "@/app/utils/utils";

export default function FilmDetail(params) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieType>();
  const [trailerUrl, setTrailerUrl] = useState("");
  const id = params.params.id;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`v2.2/films/${id}`);
      setMovie(data);
      console.log(data);

      // проверяем наличиче ссылки на трейлер в API кинопоиска
      // иначе ищем через API YouTube
      const getTrailer = async () => {
        const trailer = await fetchData(`v2.2/films/${id}/videos`);
        const hasYoutube = trailer.items.some(
          (item) => item.site === "YOUTUBE"
        );

        if (hasYoutube) {
          const youTubeUrls = trailer.items
            .filter((item) => item.site === "YOUTUBE")
            .map((item) => item.url);
          let paramParts;

          if (youTubeUrls[0].includes("youtu.be")) {
            paramParts = youTubeUrls[0].split("youtu.be/");
          } else {
            paramParts = youTubeUrls[0].split("?v=");
          }

          const videoId = paramParts[1];
          setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
        } else {
          searchMovieTrailer(data.nameRu || data.nameEn).then((youTubeUrl) => {
            const paramParts = youTubeUrl.split("?v=");
            const videoId = paramParts[1];
            setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
          });
        }
      };
      getTrailer();
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {movie && (
        <div>
          <div>
            <iframe
              className="aspect-video max-w-3xl"
              width="100%"
              height="100%"
              src={trailerUrl}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* <Image
        src={movie.posterUrl}
        alt={movie.nameRu}
        width={200}
        height={300}
        priority={true}
      /> */}
          <div className="text-2xl">{movie.nameRu || movie.nameEn}</div>
          <div className="flex items-center text-xl gap-2">
            <div>
              {movie.type === "FILM"
                ? "Фильм"
                : movie.type === "SERIES"
                ? "Сериал"
                : null}
            </div>
            <div>{movie.year}</div>
            <div>{formatMinutesToTime(movie.filmLength)}</div>
            <div>{movie.ratingAgeLimits}</div>
            <div className="flex gap-2">
              {movie.genres.map((item) => (
                <span
                  className="pt-1 pb-1 pl-4 pr-4 border border-red-800 rounded-3xl text-center text-lg shadow-sm shadow-red-800"
                  key={item.genre}
                >
                  {capitalizeFirstLetter(item.genre)}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 w-16 h-7">
              <Image src="/star.png" width={20} height={20} alt="rating" />
              {movie.ratingKinopoisk}
              <span className="flex border-l pl-1 text-gray-500 border-gray-500">
                {movie.ratingKinopoiskVoteCount}
              </span>
            </div>
          </div>

          <div>
            Страны:
            {movie.countries.map((item) => (
              <div key={item.country}>{item.country}</div>
            ))}
          </div>
          <div>IMDB: {movie.ratingImdb}</div>
          <p>{movie.description}</p>
          <p>director</p>
          <p>writters</p>
          <p>Stars</p>
          <Link href={movie.webUrl}>Подробнее</Link>
        </div>
      )}
    </>
  );
}
