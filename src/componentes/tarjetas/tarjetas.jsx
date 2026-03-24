import "./tarjetas.css";

function Cards({ data }) {

  const gridItem = (producto) => {

    const title = producto.title;
    const image = producto.poster_path;
    const rating= producto.vote_average
    const name=producto.name;
    const imageActors=producto.profile_path;

    let finalrating='';
    let imagenFinal = "";
    
    if (rating === null | rating === undefined| rating === ""){
      finalrating='';
    }else{
      finalrating=`⭐ ${rating}`;
    }

    if (image === null || image === undefined || image === "") {
      imagenFinal = imageActors;
    } else {
      imagenFinal = image;
    }
    
    return (
      <div className="cards" tabIndex="0">{/*Accesibilidad : uso para personas que van con teclado se puede ver usando el tab*/}
      <p className="rating">{finalrating}</p>
      <div className="images">
        <img
          src={`https://image.tmdb.org/t/p/w500${imagenFinal}`}
          alt={title || name}
        />
      </div>
      <h4>{title || name}</h4>
    </div>
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