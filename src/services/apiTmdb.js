const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

//Películas populares
export const getTopPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Peliculas mejor valiordas
export const getTopRatedPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
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
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//En cartelera
export const getNowPeliculas = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Series populares
export const getTopSeries = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Series en emision
export const getSeriesOnAir = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Top series
export const getTopRatedSeries = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=es-ES&region=ES&page=${page}`);
  const data = await res.json();
  return data;
};


//Actores
export const getActores = async () => {
  const res = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}&language=es-ES&region=ES`);
  const data = await res.json();
  return data.results;
};

//buscador
export const getBuscador = async (page = 1 , query ) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=es-ES&page=${page}`);
  const data = await res.json();
  return data;
};

//Info por ID

export const getInfoId = async (tipo , id)=>{
  const res = await fetch(`${BASE_URL}/${tipo}/${id}?api_key=${API_KEY}&language=es-ES&include_adult=false`);
  const data = await res.json();
  return data;
}

//edad para ver pelicula 

export const getCertificacion = async (tipo , id)=>{
  const endpoint = tipo === "movie"? `movie/${id}/release_dates`: `tv/${id}/content_ratings`;
  const res = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=es-ES&include_adult=false`);
  const data = await res.json();
  return data;
}


//viseos
export const getVideo = async (tipo , id)=>{
  const res = await fetch(`${BASE_URL}/${tipo}/${id}/videos?api_key=${API_KEY}&language=es-ES&include_adult=false`);
  const data = await res.json();
  return data;
}

//recomendaciones series / pelicculas
export const getRecomendaciones = async ( tipo , id) => {
  const recomendacion = tipo === 'tv'?`/tv/${id}/recommendations`:`/movie/${id}/similar`
  const res = await fetch(`${BASE_URL}${recomendacion}?api_key=${API_KEY}&language=es-ES`);
  const data = await res.json();
  return data;
}
