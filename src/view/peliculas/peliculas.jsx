import { useState, useEffect } from "react";
import {getTopPeliculas,getNowPeliculas,getUpComingPeliculas,getTopRatedPeliculas} from "../../services/apiTmdb";
import { Paginator } from 'primereact/paginator';
import Cards from "../../componentes/tarjetas/tarjetas";
import '../style.css'
function Peliculas({ tipo }) {

  const [peliculas, setPeliculas] = useState([]);

  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);
  const rows = 20;

  useEffect(() => {
    const seleccionar = async () => {
      let resultado;

      switch (tipo) {
        case "peliculas-populares":
          resultado = await getTopPeliculas(page);
          break;

        case "peliculas-cartelera":
          resultado = await getNowPeliculas(page);
          break;

        case "peliculas-proximamente":
          resultado = await getUpComingPeliculas(page);
          break;

        case "peliculas-top":
          resultado = await getTopRatedPeliculas(page);
          break;

        default:
          resultado = await getTopPeliculas(page);
      }
      setPeliculas(resultado.results);
      setTotalResults(resultado.total_pages*rows);
    };

    seleccionar();
  }, [tipo , page]); //dependencias cada vez que se modifique el dato de uno de los dos useeffect se va a reiniciar

  const onPageChange = (event) => {
    setPage(event.page + 1); 
  };


  return (
    
    <div className="view">
    <h2 className="titulo-seccion">🎬 Películas</h2>
    <div className="seccion">
      <Cards data={peliculas} />
    </div>
    <Paginator first={(page - 1) * rows} rows={rows} totalRecords={totalresults} onPageChange={onPageChange} />
  </div>
  
  );
}

export default Peliculas;