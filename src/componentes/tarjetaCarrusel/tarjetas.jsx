import { Carousel } from "primereact/carousel";
import "./carrusel.css";

function Card({ data }) {

  const productTemplate = (producto) => {

    const title = producto.title;
    const image = producto.backdrop_path;

    return (
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
        <h4>{title}</h4>
      </div>
    );
  };

  return (
    <Carousel
      value={data}
      numVisible={4}
      numScroll={1}
      itemTemplate={productTemplate}
      circular
    />
  );
}

export default Card;