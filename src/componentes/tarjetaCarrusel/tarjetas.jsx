import { Carousel } from "primereact/carousel";
import "./carrusel.css";
import { useNavigate } from "react-router-dom";

function Card({data , tipo}) {

  const navigate = useNavigate();

  const irInfo = (tipo , id) => {
    navigate(`/info/${tipo}/${id}`);
  };

  const CarruselItems = (item) => {
   
      const title = item.title;
      const image = item.poster_path;
      const name=item.name;
      const anio =item.first_air_date || item.release_date
      const rating= item.vote_average
      
      let tipoFinal = item.title ? 'movie' : 'tv';//ternario es como -> if(datos.title)existe??? {tipoFinal=movie}else{tipoFinal=tv}

      return (
        <div className="card" onClick={() => irInfo(tipoFinal , item.id)}>
          <p className="rating">⭐ {rating}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
          />
          <h3>{title || name}</h3>
          <p>{anio}</p>
        </div>
      );   
  }

  return (
    <Carousel
      value={data}
      numVisible={6}
      numScroll={3}
      itemTemplate={ CarruselItems}
      circular
    />
  );
}

export default Card;