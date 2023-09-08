import styles from "./page.module.css";
import Image from "next/image";
import { loadNewFilms } from "./api/api";

export default async function Home() {
  // const data = await getData();
  const movies = await loadNewFilms();

  return (
    <main className={styles.main}>
      <div>
        <h1>{movies.nameRu}</h1>
        <Image
          src={movies.posterUrl}
          alt={movies.nameRu}
          width={200}
          height={300}
        />
        <p>
          Рейтинг: <span>{movies.ratingKinopoisk}</span>
        </p>
      </div>
    </main>
  );
}
