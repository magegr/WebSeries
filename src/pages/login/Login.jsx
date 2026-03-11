import "./login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="page">

      <div className="left">

        <div className="overlay">
        <img src={logo} alt="logo" className="title" />
        <p className="subtitle">
          LAS MEJORES PELICULAS Y SERIES EN UN SOLO LUGAR
        </p>
        </div>
      </div>


      <div className="right">
         <h2>BIENVENIDO DE NUEVO</h2>
          <form className="login-card">
            <div className="input">
              <label>Correo</label>
              <input type="email" placeholder="✉"/>
            </div>
            <div className="input">
              <label>Contraseña</label>
              <input type="password" placeholder="🔑"/>
            </div>
            <button className="btn-login">
            <a href="" className="login">INICIAR SESIÓN</a> 
            </button>
            <div className="row"></div>
            <p className="create">
              ¿No tienes contraseña? <a href="">Crear cuenta</a>
            </p>
          </form>
      </div>

    </div>
  );
}

export default Login;