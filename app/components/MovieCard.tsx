"use client";
import Image from "next/image";
import { MovieType } from "../types/types";
import Link from "next/link";

export default function MovieCard({ item }: { item: MovieType }) {
  console.log(item);

  return (
    <div>
      <Link
        href={`/film/${item.kinopoiskId || item.filmId}`}
        id={item.kinopoiskId || item.filmId}
      >
        <div className="flex flex-col-reverse rounded-2xl overflow-hidden relative h-80 w-52 cursor-pointer">
          <Image
            src={item.posterUrlPreview}
            alt={item.nameRu || item.nameEn || "image"}
            width={208}
            height={320}
            className="absolute top-0 left-0 -z-10 object-cover w-full h-full"
          />
          {item.year != "null" && (
            <div className="absolute top-0 left-0 flex items-center justify-center gap-1 w-16 h-7 text-xs bg-[#19111126] backdrop-brightness-100 backdrop-blur-sm rounded-[0_0_20px_0]">
              {item.year}
            </div>
          )}
          {!item.rating ||
            (item.rating != "null" && (
              <div className="absolute top-0 right-0 flex items-center justify-center gap-1 w-16 h-7 bg-[#19111126] backdrop-brightness-100 backdrop-blur-sm rounded-[0_0_0_20px]">
                <Image src="/star.png" width={20} height={20} alt="rating" />
                {item.rating}
              </div>
            ))}
          {(item.nameRu || item.nameEn) && (
            <div className="min-h-[100px] p-4 bg-[#19111187] backdrop-brightness-100 backdrop-blur-sm">
              {item.nameRu || item.nameEn}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
