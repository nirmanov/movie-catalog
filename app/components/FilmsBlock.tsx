import MovieCard from "./MovieCard";
import { FilmBlockType } from "../types/types";
import Link from "next/link";

export const FilmsBlock: React.FC<FilmBlockType> = ({ title, movies }) => {
  return (
    <div className="block mb-10">
      <div className="flex justify-between mb-4 pl-4 pr-4">
        <h2>{title}</h2>
        <Link href="#">See more</Link>
      </div>
      <div className="grid w-full gap-8 justify-items-center grid-cols-[repeat(auto-fit,_minmax(208px,_1fr))]">
        {movies.map((item) => (
          <MovieCard key={item.filmId} item={item} />
        ))}
      </div>
    </div>
  );
};
