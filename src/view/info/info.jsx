import { useParams, useNavigate } from "react-router-dom";
import { getInfoId } from "../../services/apiTmdb";
import { useState, useEffect } from "react";
import './info.css'

function Info() {
  const { id, tipo } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const informacion = async () => {
      try {
        const data = await getInfoId(tipo, id);
        setInfo(data);
      } catch (error) {
        console.error("Error al cargar la info:", error);
      }
    };
    informacion();
  }, [tipo, id]);

  const volver = () => {
    navigate(-1);
  };

  if (!info) return <p>Cargando...</p>;

  const titulo = info.title || info.name || "Sin título";
  const genres = info.genres ? info.genres.map(g => g.name).join(", ") : "";
  const rating = info.vote_average ? `${Math.round(info.vote_average * 10)}%` : "N/A";
  const descripcion = info.overview || "Sin descripción disponible";
  const imagen = info.poster_path || info.profile_path;
  const imageFondo = info.backdrop_path;
  return (
    <div className="info-card"  style={{ 
      backgroundImage: `url(https://image.tmdb.org/t/p/original${imageFondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative"
      }}>
      <button className="btn" onClick={volver}>Volver</button>
      <div className="overlay"></div>
      <div className="info-content">
        <div>
          {imagen && (
            <img
              src={`https://image.tmdb.org/t/p/w300${imagen}`}
              alt={titulo}
            />
          )}
        </div>
        <div className="info">
          <h2>{titulo}</h2>
          {genres && <p className="genero">{genres}</p>}
          <p className="calificacion">Recomendado: {rating}</p>
          <h3>Vista General</h3>
          <p>{descripcion}</p>
          <button className="btn">Ver Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default Info;