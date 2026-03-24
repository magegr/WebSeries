import { Carousel } from "primereact/carousel";
import "./carrusel.css";

function Card({ data, setVista }) {

  const productTemplate = (producto) => {
    const title = producto.title;
    const image = producto.poster_path;
    const name=producto.name;
    const anio =producto.first_air_date || producto.release_date
    const rating= producto.vote_average

    return (
      <div className="card" onClick={()=>setVista("info")}>
        <p className="rating">⭐ {rating}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
        <h3>{title || name}</h3>
        <p>{anio}</p>
      </div>
    );
  };

  return (
    <Carousel className="carrusel"
      value={data}
      numVisible={6}
      numScroll={3}
      itemTemplate={productTemplate}
      circular
    />
  );
}

export default Card;