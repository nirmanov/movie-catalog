"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() != "") {
      router.push(`/searchResults?query=${query}`);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center p-6 w-full h-16 bg-[#212121] rounded-3xl shadow-sm"
    >
      <button className="w-[35px] h-9 mr-6">
        {" "}
        <Image alt="Search" width={35} height={35} src="/search.png" />
      </button>
      <input
        type="search"
        value={query}
        onChange={handleInput}
        className="w-full text-shadow-sm font-semibold text-2xl text-[#666565] bg-transparent outline-none"
        placeholder="Search for movies, TV shows..."
      />
    </form>
  );
}
