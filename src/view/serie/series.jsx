import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getTopSeries,getSeriesOnAir,getTopRatedSeries} from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import { Paginator } from 'primereact/paginator';
import '../style.css'
function Series() {
  const { tipo } = useParams();
  const [series, setSeries] = useState([]);
  const [titulo , setTitulo] = useState('')
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);
  const rows = 20;

  useEffect(() => {
    const cargarSeries = async () => {
      let resultado;
      switch (tipo) {
        case "series-populares":
          setTitulo('🔥 Series populare'); 
          resultado = await getTopSeries(page);
          break;

        case "series-emision":
          setTitulo('📡 Series en emision');
          resultado = await getSeriesOnAir(page);
          break;

        case "series-top":
          setTitulo(' ⭐ Top series');
          resultado = await getTopRatedSeries(page);
          break;

        default:
          setTitulo('🔥 Series populare');
          resultado = await getTopSeries(page);
      }
     setSeries(resultado.results);
     setTotalResults(resultado.total_pages*rows);
    };

    cargarSeries();

  }, [tipo,page]);

  const onPageChange = (event) => {
    setPage(event.page + 1); 
  };

  return (
    <div className="view">
    <h2 className="titulo-seccion">{titulo}</h2>
    <div className="seccion">
      <Cards data={series}/>
    </div>
    <Paginator first={(page - 1) * rows} rows={rows} totalRecords={totalresults} onPageChange={onPageChange} />
  </div>
  );
}

export default Series;