import Header from "../../componentes/header/header";
import Footer from "../../componentes/footer/footer";
import { Routes, Route } from "react-router-dom";

import Principal from "../../view/principal/Principal";
import Peliculas from "../../view/peliculas/peliculas";
import Series from "../../view/serie/series";
import Info from "../../view/info/info";
import Actors from "../../view/actores/Actors";

import './index.css';

function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />

          <Route path="/peliculas/:tipo" element={<Peliculas />} />

          <Route path="/series/:tipo" element={<Series />} />

          <Route path="/info/:tipo/:id" element={<Info />} />

          <Route path="/actores" element={<Actors />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default Index;