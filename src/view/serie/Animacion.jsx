import { useState, useEffect } from "react";
import { getSeriesAnimacion } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function SerieAnimacion() {

  const [animacion, setAnimacion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarSeries = async () => {
      const data = await getSeriesAnimacion();
      setAnimacion(data);
      setLoading(false);
    };

    cargarSeries();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">🌹 SERIES DE ANIMACION</h2>

    <div className="seccion">
      <Cards data={animacion} />
    </div>
  </div>
)
}

export default SerieAnimacion;