import { ScrollPanel } from "primereact/scrollpanel";
import "./tarjetas.css";

function Card({ data }) {

  const gridItem = (producto) => {

    const title = producto.title;
    const image = producto.backdrop_path;

    return (
      <>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
      </div>
        <h4>{title}</h4>
      </>
    );
  };

  return (
    <ScrollPanel style={{ width: "100%", height: "250px" }}>
      <div className="scroll-container">
        {data.map((producto) => (
          <div key={producto.id}>
            {gridItem(producto)}
          </div>
        ))}
      </div>
    </ScrollPanel>
  );
}

export default Card;