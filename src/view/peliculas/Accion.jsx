import { useState, useEffect } from "react";
import { getPeliculasAccion } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function Accion() {

  const [accion, setAccion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getPeliculasAccion();
      setAccion(data);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">💥 PELÍCULAS DE ACCIÓN</h2>

    <div className="seccion">
      <Cards data={accion} />
    </div>
  </div>
)
}

export default Accion;