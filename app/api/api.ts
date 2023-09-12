import { queryType, fetchParamType } from "../types/types";

//api для запроса информации
export async function fetchData(fetchParam: fetchParamType) {
  const res = await fetch(
    `https://kinopoiskapiunofficial.tech/api/${fetchParam}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "1eb9976e-fcdd-47d8-b923-4850ecf3f356",
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data;
}

//api youtube для подгрузки трейлера
const YOUTUBE_API = "AIzaSyCxvbE4HXey8QeVlxqYlCcvbVIB6QQ1TXM";

export async function searchMovieTrailer(title: string) {
  try {
    const params = new URLSearchParams({
      key: YOUTUBE_API,
      q: `${title} трейлер, trailer`,
      type: "video",
      maxResults: "1",
    });

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params}`
    );
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      const trailerUrl = `https://www.youtube.com/watch?v=${videoId}`;
      return trailerUrl;
    } else {
      console.log("Трейлер не найден.");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при поиске трейлера:", error);
    return null;
  }
}
