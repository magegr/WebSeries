import "./tarjetas.css";

function Cards({ data }) {

  const gridItem = (producto) => {

    const title = producto.title;
    const image = producto.backdrop_path;

    const name=producto.name;
    const imageActors=producto.profile_path;

    let imagenFinal = "";
    
    if (image === null || image === undefined || image === "") {
      imagenFinal = imageActors;
    } else {
      imagenFinal = image;
    }
    
    return (
      <>
      <div className="cards">
        <img
          src={`https://image.tmdb.org/t/p/w500${imagenFinal}`}
          alt={title || name}
        />
      </div>
      <h4>{title || name}</h4>
    </>
    );
  };

  return (
    <>
      {data.map((producto) => (
        <div key={producto.id}>
          {gridItem(producto)}
        </div>
      ))}
   </>
  );
}

export default Cards;