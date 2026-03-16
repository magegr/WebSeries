const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getTopPeliculas = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getPeliculasAccion = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
  const data = await res.json();
  return data.results;
};

export const getPeliculasTerror = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);
  const data = await res.json();
  return data.results;
};

export const getPeliculasRomance = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`);
  const data = await res.json();
  return data.results;
};

export const getPeliculasFiccion = async () => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`);
  const data = await res.json();
  return data.results;
};


export const getTopSeries = async () => {
  const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

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


export const getActores = async () => {
  const res = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};