"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { SearchResultList } from "../components/SearchResultList";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const receiveFilms = async () => {
      const data = await fetchData(
        `v2.1/films/search-by-keyword?keyword=${query}`
      );
      console.log(data);
      setMovies(data.films);
    };

    if (query) {
      receiveFilms();
    }
  }, [query]);

  return (
    <div>
      <h1 className="mb-6">Результаты поиска для: {query}</h1>
      {movies ? <SearchResultList movies={movies} /> : <p>Loading</p>}
    </div>
  );
}
