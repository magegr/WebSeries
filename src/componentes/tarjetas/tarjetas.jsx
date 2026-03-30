import "./tarjetas.css"
import { useNavigate } from "react-router-dom";
function Cards({ data , tipo }) {
  const navigate = useNavigate();

  const irInfo = (tipo , id) => {
    navigate(`/info/${tipo}/${id}`);
  };
  
  const CardItem = (item) => {
    const title = item.title;
    const image = item.poster_path;
    const rating= item.vote_average
    const name=item.name;
    const imageActors=item.profile_path;


    let finalrating='';
    let imagenFinal = "";
    
    if (rating === null || rating === undefined || rating === ""){
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
      <div className="cards" tabIndex="0"  onClick={() => irInfo(tipo , item.id)} >{/*Accesibilidad : uso para personas que van con teclado se puede ver usando el tab*/}
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
      {data.map((item) => (
        <div key={item.id}  >
          {CardItem(item)}
        </div>
      ))}
   </>
  );
}

export default Cards;