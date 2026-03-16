import { useState, useEffect } from "react";
import { getSeriesFiccion } from "../../services/apiTmdb";
import { Skeleton } from "primereact/skeleton";
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
    <h2 className="titulo-seccion">👽 SERIES DE FICCIÓN</h2>

    <div className="seccion">
      <Cards data={ficcion} />
    </div>
  </div>
)
}

export default SerieFiccion;