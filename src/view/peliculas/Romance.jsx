import { useState, useEffect } from "react";
import { getPeliculasRomance } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function Romance() {

  const [romance, setRomance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getPeliculasRomance();
      setRomance(data);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">🌹 PELÍCULAS DE ROMANCE</h2>

    <div className="seccion">
      <Cards data={romance} />
    </div>
  </div>
)
}

export default Romance;