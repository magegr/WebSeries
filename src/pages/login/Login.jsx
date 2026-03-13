import "./login.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

function Login() {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
      <div className="page">
        <div className="filtro">
          <div className="left">
            <img src={logo2} alt="logo" className="title" />
            <p className="subtitle">
              LAS MEJORES PELICULAS Y SERIES EN UN SOLO LUGAR
            </p>
          </div>

          <div className="right">
            <h2>BIENVENIDO DE NUEVO</h2>
            <form onSubmit={handleLogin} className="login-card">
              <div className="input">
                <label>Correo</label>
                <input type="email" placeholder="✉" />
              </div>
              <div className="input">
                <label>Contraseña</label>
                <input type="password" placeholder="🔑" />
              </div>
              <button type="submit" className="btn-login">
                INICIAR SESIÓN
              </button>
              <div className="row"></div>
              <p className="create">
                ¿No tienes contraseña? <a href="">Crear cuenta</a>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;