import { useParams, useNavigate } from "react-router-dom";
import { getInfoId , getVideo , getCertificacion , getRecomendaciones } from "../../services/apiTmdb";
import { useState, useEffect } from "react";
import Card from "../../componentes/tarjetaCarrusel/tarjetas";
import Modal from "../../componentes/modal/modal"
import './info.css'

function Info() {
  const { id, tipo } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [video , setVideo]= useState(null);
  const [clasificaciones, setClasificacion] = useState(null)
  const [recomendaciones , setRecomendaciones] = useState(null)


  useEffect(() => {
    const informacion = async () => {
      try {
        const data = await getInfoId(tipo, id);
        setInfo(data);

        const videos = await getVideo(tipo , id);
        const españa = videos.results.find(resultado => resultado.iso_3166_1 === "ES");
        let key = null;
        key=españa.key;
        console.log(key)
        setVideo(key);


        const clasificacion = await getCertificacion(tipo , id)
        const espana = clasificacion.results.find(resultado => resultado.iso_3166_1 === "ES");
        let certificacionES = null;
        if (tipo === "tv") {
          certificacionES = espana?.rating || null;
        } else {
          certificacionES = espana?.release_dates?.[0]?.certification || null;
        }

        setClasificacion(certificacionES);

        const recomendaciones = await getRecomendaciones( tipo , id )
        setRecomendaciones(recomendaciones.results)

      } catch (error) {
        console.error("Error al cargar la info:", error);
      }
    };
    informacion();
  }, [tipo, id , video]);
 
  
  const volver = () => {
    navigate(-1);
  };
  
  if (!info) return <p>Cargando...</p>;
  
  const titulo = info.title || info.name || "Sin título";
  const genres = info.genres ? info.genres.map(generos => generos.name).join(", ") : "Sin generos";//uso de ternarios
  const descripcion = info.overview || "Sin descripción disponible";
  const anio= info.release_date;
  const episodios = info.number_of_episodes;
  const duracion = info.runtime ? `${Math.floor(info.runtime / 60)}h ${info.runtime % 60}min`: null;
  const temporada=info.number_of_seasons;
  const imageFondo = info.backdrop_path;
  


  return (
    <>
    <div className="info-card"  style={{ 
      backgroundImage: `url(https://image.tmdb.org/t/p/original${imageFondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative"
    }}>
      <div className="overlay"></div>

      <button className="boton-volver" onClick={volver}>Volver a catálogo</button>

      <div className="container">
        <div className="info">
          <div className="titulos">
            <h1>{titulo}</h1>
          {clasificaciones ? (
            <div className="square">
              <p>{clasificaciones}</p>
            </div>
          ) : null}
           
          </div>
          <div className="generos">
            <p>{genres}</p>
            <p>{anio}</p>
          </div>
          <div className="infoUser">
              {episodios ? (<p>Episodios : {episodios}</p>) : (<p>{duracion}</p>)}
              {temporada ? (<p>Temporadas : {temporada}</p>) : null}
          </div>
          <div className="descripcion">
            <h2>Descripción</h2>
            <p>{descripcion}</p>
          </div>
          <Modal video={video}/>
        </div>
        <div className="imagen">Imagenes</div>
      </div>
      <div className="carrusel">
         <Card data={recomendaciones} tipo='recomendaciones' />
      </div>
    </div>
    </>
  );
}

export default Info;