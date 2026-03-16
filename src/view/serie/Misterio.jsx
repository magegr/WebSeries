import { useState, useEffect } from "react";
import { getSeriesMisterio } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function SerieMisterio() {

  const [misterio, setMisterio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarSeries = async () => {
      const data = await getSeriesMisterio();
      setMisterio(data);
      setLoading(false);
    };

    cargarSeries();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">🔍 SERIES DE MISTERIO</h2>

    <div className="seccion">
      <Cards data={misterio} />
    </div>
  </div>
)
}

export default SerieMisterio;