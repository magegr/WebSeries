import { useState } from "react";
import Header from "../../componentes/header/header";
import Footer from "../../componentes/footer/footer";
import './index.css';

import Principal from "../../view/principal/Principal";
import Peliculas from "../../view/peliculas/peliculas";
import Series from "../../view/serie/series"

import Actors from "../../view/actores/Actors";
import Info from "../../view/info/info";

function Index() {

  const [vistaActual , setVistaActual]= useState("")
  const [vista, setVista] = useState("principal");
  const [query , setQuery] = useState("");

  const renderVista = () => {

    switch (vista) {
      
      case "principal":
        return <Principal setVista={setVista}  setVistaActual={setVistaActual}/>;
     
      case "peliculas-populares":
      case "peliculas-cartelera":
      case "peliculas-proximamente":
      case "peliculas-top":
      case "buscador":
        return <Peliculas setVista={setVista}  setVistaActual={setVistaActual} tipo={vista} query={query}/>;

      case "series-top":
      case "series-emision":
      case "series-populares":
        return <Series setVista={setVista} setVistaActual={setVistaActual} tipo={vista}/>;

      case "info":
        return <Info setVista={setVista} vistaActual={vistaActual}/>
      case "actores":
        return <Actors />;

      default:
        return <Principal />;
    }
  };

  return (
    <>
      <Header setVista={setVista} setQuery={setQuery}/>

      <main>
        {renderVista()}
      </main>

      <Footer />
    </>
  );
}

export default Index;