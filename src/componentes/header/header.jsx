import "./header.css";
import logo from "../../assets/logo_pequeño.png";

import 'primeicons/primeicons.css';
        
import { useNavigate } from "react-router-dom";

function Header({ setVista }) {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="header">

      <div onClick={()=>setVista("principal")} className="logo">
        <img src={logo} alt="logo"/>
      </div>

      <nav className="nav">

        <div className="dropdown nav-item">
          <span>PELICULAS</span>
          <div className="dropdown-menu">
            <p onClick={()=>setVista("pelicula-accion")}>ACCION</p>
            <p onClick={()=>setVista("pelicula-miedo")}>MIEDO</p>
            <p onClick={()=>setVista("pelicula-romance")}>ROMANCE</p>
            <p onClick={()=>setVista("pelicula-ficcion")}>FICCION</p>
          </div>
        </div>

        <div className="dropdown nav-item">
          <span>SERIES</span>
          <div className="dropdown-menu">
            <p onClick={()=>setVista("serie-accion")}>ACCION</p>
            <p onClick={()=>setVista("serie-miedo")}>MIEDO</p>
            <p onClick={()=>setVista("serie-romance")}>ROMANCE</p>
            <p onClick={()=>setVista("serie-ficcion")}>FICCION</p>
          </div>
        </div>
        
        <p className="nav-item" onClick={()=>setVista("actores")}>
          ACTORES
        </p>
      </nav>
      <div onClick={handleLogin} className="user">
        <i className="pi pi-user"></i>
      </div>
    </header>
  )
}

export default Header;