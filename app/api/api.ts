export async function onSearch(query) {
  const res = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "1eb9976e-fcdd-47d8-b923-4850ecf3f356",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(query);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log(data);

  return data;
}

export async function loadNewFilms() {
  const res = await fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/301",
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
