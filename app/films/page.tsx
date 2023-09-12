import { fetchData } from "../api/api";
import { FilmsBlock } from "../components/FilmsBlock";

export default async function Films() {
  const movies = await fetchData(
    "v2.2/films/premieres?year=2023&month=SEPTEMBER"
  );
  console.log(movies);

  return (
    <div>
      {/* <h1>Фильмы</h1> */}
      <FilmsBlock title="Фильмы" movies={movies.items} />
    </div>
  );
}
