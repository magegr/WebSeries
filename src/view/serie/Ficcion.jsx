import { useState, useEffect } from "react";
import { getSeriesFiccion } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function SerieFiccion() {

  const [ficcion, setFiccion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarSeries = async () => {
      const data = await getSeriesFiccion();
      setFiccion(data);
      setLoading(false);
    };

    cargarSeries();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">👽 SERIES DE FICCIÓN</h2>

    <div className="seccion">
      <Cards data={ficcion} />
    </div>
  </div>
)
}

export default SerieFiccion;