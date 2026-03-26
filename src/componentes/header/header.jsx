import "./header.css";
import logo from "../../assets/logo_pequeño.png";
import 'primeicons/primeicons.css';
import Search from "../search/search";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const ir = (ruta) => {
    navigate(ruta);
  };

  return (
    <>
      <header className="header">

        <div onClick={() => ir("/")} className="logo">
          <img src={logo} alt="logo"/>
        </div>

        <nav className="nav">

          <div className="dropdown nav-item">
            <span>🎬 Películas</span>
            <div className="dropdown-menu">
              <p onClick={() => ir("/peliculas/peliculas-populares")}>🔥 Popular</p>
              <p onClick={() => ir("/peliculas/peliculas-cartelera")}>🎟️ En cartelera</p>
              <p onClick={() => ir("/peliculas/peliculas-proximamente")}>⏳ Próximamente</p>
              <p onClick={() => ir("/peliculas/peliculas-top")}>⭐ Mejor puntuadas</p>
            </div>
          </div>

          <div className="dropdown nav-item">
            <span>📺 Series</span>
            <div className="dropdown-menu">
              <p onClick={() => ir("/series/series-populares")}>🔥 Popular</p>
              <p onClick={() => ir("/series/series-emision")}>📡 En emisión</p>
              <p onClick={() => ir("/series/series-top")}>⭐ Mejor valoradas</p>
            </div>
          </div>

          <p className="nav-item" onClick={() => ir("/actores")}>
            👤 Actores
          </p>

        </nav>

        <div onClick={handleLogin} className="user">
          <i className="pi pi-user"></i>
        </div>

      </header>

      <Search />
    </>
  );
}

export default Header;