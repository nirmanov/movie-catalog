import { fetchData } from "./api/api";
import { FilmsBlock } from "./components/FilmsBlock";

export default async function Home() {
  const topMovies = await fetchData(
    "v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
  );

  const premieresMovies = await fetchData(
    "v2.2/films/premieres?year=2023&month=SEPTEMBER"
  );

  return (
    <div>
      <FilmsBlock
        title="В этом месяце"
        movies={premieresMovies.items.slice(0, 6)}
      />
      <FilmsBlock title="TOP" movies={topMovies.films.slice(0, 6)} />
      <FilmsBlock
        title="TOP 100 Popular Films"
        movies={topMovies.films.slice(6, 12)}
      />
    </div>
  );
}
