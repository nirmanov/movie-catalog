export type queryType = string | null;
export type fetchParamType = string;

export type MovieType = {
  kinopoiskId: string;
  filmId: string;
  posterUrlPreview: string;
  posterUrl: string;
  nameRu: string;
  nameEn: string;
  rating: string | null;
  year: string | null;
  filmLength: string;
  ratingAgeLimits: string;
  ratingKinopoisk: string;
  ratingImdb: string;
  description: string;
  webUrl: string;
  type: string;
  genres: string[];
  genre: string;
  countries: string[];
  country: string;
};

export type SearchResultPropsType = {
  movies: MovieType[];
};

export type FilmBlockType = {
  title: string;
  movies: MovieType[];
};
