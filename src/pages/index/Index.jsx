import { useState } from "react";
import Header from "../../componentes/header/header";
import Footer from "../../componentes/footer/footer";
import './index.css';

import Principal from "../../view/principal/Principal";
import Peliculas from "../../view/peliculas/peliculas";
import Series from "../../view/serie/series"

import Actors from "../../view/actores/Actors";

function Index() {

  const [vista, setVista] = useState("principal");

  const renderVista = () => {

    switch (vista) {

      case "principal":
        return <Principal />;
     
      case "peliculas-populares":
      case "peliculas-cartelera":
      case "peliculas-proximamente":
      case "peliculas-top":
        return <Peliculas tipo={vista}/>;

      case "series-top":
      case "series-airing":
      case "series-populares":
        return <Series tipo={vista}/>;

      case "actores":
        return <Actors />;

      default:
        return <Principal />;
    }
  };

  return (
    <>
      <Header setVista={setVista} />

      <main>
        {renderVista()}
      </main>

      <Footer />
    </>
  );
}

export default Index;