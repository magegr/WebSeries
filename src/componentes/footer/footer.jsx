import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer(){

  const navigate = useNavigate();

  function irLogin(){
    navigate("/login");
  }

  return(
    <footer className="footer">
      <div className="container-footer">
            <div className="logo">
            <h2>PX MOVIES</h2>
            <button className="boton" onClick={irLogin}>ÚNETE</button>
            </div>

            <div className="links">
                <div className="col">
                    <h3>BÁSICO</h3>
                    <p>Sobre web</p>
                    <p>Contacto</p>
                    <p>API</p>
                    <p>Sistema</p>
                </div>

                <div className="col">
                    <h3>LEGAL</h3>
                    <p>Términos</p>
                    <p>Privacidad</p>
                    <p>DMCA</p>
                </div>
            </div>
      </div>
      <p className="derechos">
        © 2026 PX Movies - Todos los derechos reservados
      </p>
    </footer>
  )
}

export default Footer;
