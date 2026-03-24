import { useState, useEffect } from "react";
import { getTopPeliculas, getUpComingPeliculas, getTopSeries, getTrendingAll } from "../../services/apiTmdb";

import Card from "../../componentes/tarjetaCarrusel/tarjetas";
import './principal.css';

function Principal ({ setVista, setVistaActual }) {

  setVistaActual('principal')
  const [peliculas, setPeliculas] = useState([]);
  const [upComing , setUpComing] = useState([]);
  const [series, setSeries] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getTopPeliculas();
      setPeliculas(data.results);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);

  useEffect(() => {
    const cargarUpComing = async () => {
      const data = await getUpComingPeliculas();
      setUpComing(data.results);
      setLoading(false);
    };

    cargarUpComing();
  }, []);

  useEffect(() => {
    const cargarSeries = async () => {
      const data = await getTopSeries();
      setSeries(data.results);
      setLoading(false);
    };

    cargarSeries();
  }, []);

  useEffect(() => {
    const cargarTrending = async () => {
      const data = await getTrendingAll();
      setTrending(data.results);
      setLoading(false);
    };

    cargarTrending();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <h2 className="marcadores">🔥 Películas populares</h2>
      <div>
        <Card data={peliculas} setVista={setVista}/>
      </div>

      <h2 className="marcadores">🎬 Próximamente</h2>
      <div>
        <Card data={upComing} setVista={setVista} />
      </div>

      <h2 className="marcadores">📺 Series populares</h2>
      <div>
        <Card data={series} setVista={setVista} />
      </div>

      <h2 className="marcadores">⚡ Tendencias</h2>
      <div>
        <Card data={trending} setVista={setVista} />
      </div>
    </>
  );
}

export default Principal;