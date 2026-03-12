import { useState } from "react";
import Header from "../../componentes/header/header";
import Footer from "../../componentes/footer/footer"
import './index.css'
import Principal from "../../view/principal/Principal";

import PeliculaAccion from "../../view/peliculas/Accion";
import PeliculaMiedo from "../../view/peliculas/Miedo";
import PeliculaRomance from "../../view/peliculas/Romance";
import PeliculaFiccion from "../../view/peliculas/Ficcion";

import SerieAccion from "../../view/serie/Accion";
import SerieMiedo from "../../view/serie/Miedo";
import SerieRomance from "../../view/serie/Romance";
import SerieFiccion from "../../view/serie/Ficcion";

import Actors from "../../view/actores/Actors";

function Index() {

  const [vista, setVista] = useState("principal");

  const renderVista = () => {

    switch (vista) {

      case "principal":
        return <Principal />

      case "pelicula-accion":
        return <PeliculaAccion />

      case "pelicula-miedo":
        return <PeliculaMiedo />

      case "pelicula-romance":
        return <PeliculaRomance />

      case "pelicula-ficcion":
        return <PeliculaFiccion />

      case "serie-accion":
        return <SerieAccion />

      case "serie-miedo":
        return <SerieMiedo />

      case "serie-romance":
        return <SerieRomance />

      case "serie-ficcion":
        return <SerieFiccion />

      case "actores":
        return <Actors />

      default:
        return <Principal />
    }

  }

  return (
    <>
      <Header setVista={setVista} />

      <main>
        {renderVista()}
      </main>

      <Footer />
    </>
  )

}

export default Index;