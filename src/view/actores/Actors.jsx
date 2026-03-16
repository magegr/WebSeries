import { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
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

  if (loading) {
    
    return (
      <div className="view">
        <Skeleton width="30%" height="50px" className="m-4" borderRadius="12px" />
        <div className="cargando">
          {Array.from({ length: 20 }).map((value, i) => (
              <div key={i}>
                <Skeleton width="260px" height="300px" borderRadius="12px" className="m-4"/>
              </div>
          ))}
        </div>
      </div>
    )
  } 
    

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