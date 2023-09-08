"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { onSearch } from "../api/api";
import Image from "next/image";
import { SearchResultList } from "../components/SearchResultList";

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await onSearch(query);
      console.log(data);

      setMovies(data.films);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <h1 className="mb-6">Результаты поиска для: {query}</h1>
      {movies ? <SearchResultList movies={movies} /> : <p>Loading</p>}
    </div>
  );
}
