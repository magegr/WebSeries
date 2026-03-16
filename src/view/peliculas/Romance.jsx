import { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
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


  if (loading) {
    
    return (
      <div className="view">
        <Skeleton width="30%" height="50px" className="m-4" borderRadius="12px" />
        <div className="cargando">
          {Array.from({ length: 20 }).map((value, i) => (
              <div key={i}>
                <Skeleton width="250px" height="180px" borderRadius="12px" className="m-4"/>
              </div>
          ))}
        </div>
      </div>
    )
  } 

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