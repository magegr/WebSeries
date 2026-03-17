import "./header.css";
import logo from "../../assets/logo_pequeño.png";
import 'primeicons/primeicons.css';
import Search from "../search/search";
import { useNavigate } from "react-router-dom";

function Header({ setVista }) {


  
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <header className="header">

      <div onClick={()=>setVista("principal")} className="logo">
        <img src={logo} alt="logo"/>
      </div>

      <nav className="nav">

        <div className="dropdown nav-item">
          <span>🎬 Películas</span>
          <div className="dropdown-menu">
            <p onClick={()=>setVista("peliculas-populares")}>🔥 Popular</p>
            <p onClick={()=>setVista("peliculas-cartelera")}>🎟️ En cartelera</p>
            <p onClick={()=>setVista("peliculas-proximamente")}>⏳ Próximamente</p>
            <p onClick={()=>setVista("peliculas-top")}>⭐ Mejor puntuadas</p>
          </div>
        </div>

        <div className="dropdown nav-item">
          <span>📺 Series</span>
          <div className="dropdown-menu">
            <p onClick={()=>setVista("series-populares")}>🔥 Popular</p>
            <p onClick={()=>setVista("series-airing")}>📡 En emisión</p>
            <p onClick={()=>setVista("series-top")}>⭐ Mejor valoradas</p>
          </div>
        </div>
        <p className="nav-item" onClick={()=>setVista("actores")}>
          👤 Actores
        </p>
      </nav>
      <div onClick={handleLogin} className="user">
        <i className="pi pi-user"></i>
      </div>
    </header>
      <Search/>
      </>
  );
}

export default Header;