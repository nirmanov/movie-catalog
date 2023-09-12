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
  filmLength: number;
  ratingAgeLimits: string;
  ratingKinopoisk: string;
  ratingImdb: string;
  description: string;
  webUrl: string;
  type: string;
  genres: {
    genre: string;
  }[];
  countries: {
    country: string;
  }[];
  ratingKinopoiskVoteCount: string;
};

export type SearchResultPropsType = {
  movies: MovieType[];
};

export type FilmBlockType = {
  title: string;
  movies: MovieType[];
};

export type TrailerItemType = {
  site: string;
  url: string;
};

export type TrailerType = {
  items: TrailerItemType[];
};

export type ParamsType = {
  params: {
    id: string;
  };
};
