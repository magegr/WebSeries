import { useState, useEffect } from "react";
import { getTopPeliculas } from "../../services/apiTmdb";
import { getTopSeries } from "../../services/apiTmdb";
import Card from "../../componentes/tarjetaCarrusel/tarjetas";
import './principal.css'

function Principal() {

  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getTopPeliculas();
      setPeliculas(data);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);
  useEffect(() => {
    const cargarSeries = async () => {
      const data = await getTopSeries();
      setSeries(data);
      setLoading(false);
    };

    cargarSeries();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <h2 className="marcadores">🔥 PELICULAS MÁS POPULARES</h2>
      <div>
        <Card data={peliculas} />
      </div>

      <h2 className="marcadores">🔥 SERIES MÁS POPULARES</h2>
      <div>
        <Card data={series} />
      </div>
   </>
    
  )
}

export default Principal;