import MovieCard from "./MovieCard";
import { SearchResultPropsType } from "../types/types";

export const SearchResultList: React.FC<SearchResultPropsType> = ({
  movies,
}) => {
  return (
    <div>
      <div className="grid w-full gap-8 justify-items-center grid-cols-[repeat(auto-fit,_minmax(208px,_1fr))]">
        {movies.map((item) => (
          <MovieCard key={item.filmId} item={item} />
        ))}
      </div>
    </div>
  );
};
