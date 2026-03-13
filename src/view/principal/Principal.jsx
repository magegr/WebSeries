import { useState, useEffect } from "react";
import { getTopPeliculas } from "../../services/apiTmdb";
import Card from "../../componentes/productos/tarjetas";
import './principal.css'

function Principal() {

  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await getTopPeliculas();
      setPeliculas(data);
      setLoading(false);
    };

    cargarPeliculas();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <h2 className="marcadores">🔥 MÁS POPULARES</h2>
      <div className="container">
        <Card data={peliculas} />
      </div>
   </>
    
  )
}

export default Principal;