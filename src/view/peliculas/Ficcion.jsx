import { useState, useEffect } from "react";
import { getPeliculasFiccion } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function Ficcion() {

  const [ficcion, setFiccion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getPeliculasFiccion();
      setFiccion(data);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">👽​ PELÍCULAS DE FICCIÓN</h2>

    <div className="seccion">
      <Cards data={ficcion} />
    </div>
  </div>
)
}

export default Ficcion;