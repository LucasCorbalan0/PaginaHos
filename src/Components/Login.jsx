import { useState, useEffect } from "react";
import axios from "axios";
import { URL_LOGIN } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";
import { DOCTORES } from "../Routers/router";
import "../CSS/Login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);

  const userNavigate = useNavigate();

  const getLogin = async () => {
    try {
      const response = await axios.get(URL_LOGIN);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {getLogin()}, []);


  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(URL_LOGIN);
      const usuarioEncontrado = response.data.find(
        (user) => user.user === usuario && user.contrasenia === password
      );
      
      if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso");
        userNavigate(DOCTORES);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={manejarEnvio}>
          <h2>Iniciar sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
