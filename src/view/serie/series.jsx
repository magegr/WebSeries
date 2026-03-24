import { useState, useEffect } from "react";
import {getTopSeries,getSeriesOnAir,getTopRatedSeries} from "../../services/apiTmdb";
import Cards from "../../componentes/tarjetas/tarjetas";
import { Paginator } from 'primereact/paginator';
import '../style.css'
function Series({ tipo  , setVista , setVistaActual}) {

  const vistaInfo = () => {
    setVista("info");
  };

  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);
  const rows = 20;

  useEffect(() => {
    const cargarSeries = async () => {
      let resultado;
      let titulo;
      switch (tipo) {

        case "series-populares":
          setVistaActual(tipo)
          titulo='🔥 Series populare'; 
          resultado = await getTopSeries(page);
          break;

        case "series-emision":
          setVistaActual(tipo)
          titulo='📡 Series en emision';
          resultado = await getSeriesOnAir(page);
          break;

        case "series-top":
          setVistaActual(tipo)
          titulo='Top series';
          resultado = await getTopRatedSeries(page);
          break;

        default:
          setVistaActual(tipo)
          titulo='🔥 Series populare';
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
    <h2 className="titulo-seccion">🎬 Series</h2>
    <div className="seccion" onClick={vistaInfo}>
      <Cards data={series} />
    </div>
    <Paginator first={(page - 1) * rows} rows={rows} totalRecords={totalresults} onPageChange={onPageChange} />
  </div>
  );
}

export default Series;