import { useState, useEffect } from "react";
import { getSeriesAccion } from "../../services/apiTmdb";
import { Skeleton } from "primereact/skeleton";
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'

function SerieAccion() {

  const [accion, setAccion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarSeries = async () => {
      const data = await getSeriesAccion();
      setAccion(data);
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
    <h2 className="titulo-seccion">💥 SERIES DE ACCIÓN</h2>

    <div className="seccion">
      <Cards data={accion} />
    </div>
  </div>
)
}

export default SerieAccion;