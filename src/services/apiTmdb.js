const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

//Películas populares
export const getTopPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Peliculas mejor valiordas
export const getTopRatedPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Tendencias (pelis + series)
export const getTrendingAll = async () => {
  const res = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};


//Próximamente
export const getUpComingPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//En cartelera
export const getNowPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Generos peliculas 
export const getPeliculasAccion = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&region=ES`);
  const data = await res.json();
  return data.results;
};


export const getPeliculasTerror = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&region=ES`);
  const data = await res.json();
  return data.results;
};


export const getPeliculasRomance = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&region=ES`);
  const data = await res.json();
  return data.results;
};


export const getPeliculasFiccion = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&region=ES`);
  const data = await res.json();
  return data.results;
};





//Series populares
export const getTopSeries = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Series en emision
export const getSeriesOnAir = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&page=${page}`);
  const data = await res.json();
  return data;
};

//Top series
export const getTopRatedSeries = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=${page}`);
  const data = await res.json();
  return data;
};

//Generos Series
export const getSeriesAccion = async () => {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10759`);
  const data = await res.json();
  return data.results;
};


export const getSeriesMisterio = async () => {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=9648`);
  const data = await res.json();
  return data.results;
};


export const getSeriesAnimacion = async () => {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`);
  const data = await res.json();
  return data.results;
};


export const getSeriesFiccion = async () => {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765`);
  const data = await res.json();
  return data.results;
};



//Actores
export const getActores = async () => {
  const res = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}&region=ES`);
  const data = await res.json();
  return data.results;
};

//buscador
export const getBuscador = async (page = 1 , query ) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=es&page=${page}`);
  const data = await res.json();
  return data;
};