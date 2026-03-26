import { useState, useEffect } from "react";
import { useParams , useLocation} from "react-router-dom";
import {getTopPeliculas,getNowPeliculas,getUpComingPeliculas,getTopRatedPeliculas, getBuscador} from "../../services/apiTmdb";
import { Paginator } from 'primereact/paginator';
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'
function Peliculas() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { tipo } = useParams();
  const [peliculas, setPeliculas] = useState([]);
  const [titulos, setTitulo]=useState('');
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);
  const rows = 20;

  useEffect(() => {
    const seleccionar = async () => {
      let resultado;
      let titulo;

      switch (tipo) {
        case "peliculas-populares":
          titulo='🔥 Peliculas populares';     
          resultado = await getTopPeliculas(page);
          break;

        case "peliculas-cartelera":
          titulo='🎟️ Peliculas en cartelera'; 
          resultado = await getNowPeliculas(page);
          break;

        case "peliculas-proximamente":
          titulo='⏳ Peliculas proximamente';
          resultado = await getUpComingPeliculas(page);
          break;

        case "peliculas-top":
          titulo='⭐ Top peliculas'; 
          resultado = await getTopRatedPeliculas(page);
          break;

        case "buscador":
          titulo='Resultados de la busqueda:'; 
          resultado = await getBuscador(page , query);
        break;
        
        default:
          titulo='🔥 Peliculas populares'; 
          resultado = await getTopPeliculas(page);
      }
      setTitulo(titulo);
      setPeliculas(resultado.results);
      setTotalResults(resultado.total_pages*rows);
      
    };

    seleccionar();
  }, [tipo , page , query]); //dependencias cada vez que se modifique el dato de uno de los dos useeffect se va a reiniciar

  const onPageChange = (event) => {
    setPage(event.page + 1); 
  };

  return (
    
    <div className="view">
      <h2 className="titulo-seccion">{titulos}</h2>
      <div className="seccion">
        <Cards data={peliculas}/>
      </div>
      <Paginator first={(page - 1) * rows} rows={rows} totalRecords={totalresults} onPageChange={onPageChange} />
    </div>
  
  );
}

export default Peliculas;