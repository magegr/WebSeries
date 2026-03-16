import { useState, useEffect } from "react";
import { getActores } from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function Actores() {

  const [actores, setActores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarActores = async () => {
      const data = await getActores();
      setActores(data);
      setLoading(false);
    };

    cargarActores();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (

  <div className="view">
    <h2 className="titulo-seccion">🎬​ ACTORES</h2>

    <div className="seccion">
      <Cards data={actores} />
    </div>
  </div>
)
}

export default Actores;