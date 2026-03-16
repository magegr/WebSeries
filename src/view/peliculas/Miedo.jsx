import { useState, useEffect } from "react";
import { getPeliculasTerror } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function Miedo() {

  const [miedo, setMiedo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getPeliculasTerror();
      setMiedo(data);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">👻 PELÍCULAS DE MIEDO</h2>

    <div className="seccion">
      <Cards data={miedo} />
    </div>
  </div>
)
}

export default Miedo;