import { Button } from 'react-bootstrap';
// Importamos los hooks y todas las constantes de rutas que vamos a necesitar.
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME, LOGIN, DOCTORES, PACIENTES } from '../Routers/router'; // Asegúrate de importar PACIENTES

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar el cierre de sesión, redirige a la pantalla de Login.
  const handleLogout = () => {
    // Aquí puedes agregar la lógica para limpiar el estado de autenticación si es necesario (ej: limpiar localStorage).
    navigate(HOME);
  };

  /**
   * @function renderButton
   * @description Renderiza uno o más botones dependiendo de la ruta actual (location.pathname).
   * @returns {JSX.Element} Los botones a renderizar.
   */
  const renderButton = () => {
    // El switch evalúa la ruta actual para decidir qué botones mostrar.
    switch (location.pathname) {
      // Si la ruta es '/login', muestra un botón para volver al inicio.
      case LOGIN:
        return (
          <Button
            variant="outline-light"
            onClick={() => navigate(HOME)}
          >
            <i className="bi bi-arrow-left-circle me-2"></i>
            Volver al Inicio
          </Button>
        );

      // Si la ruta es '/doctores', muestra un solo botón para cerrar sesión.
      case DOCTORES:
        return (
          <Button
            variant="outline-light"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar Sesión
          </Button>
        );

      // --- ¡NUEVO CASO IMPLEMENTADO! ---
      // Si la ruta es '/pacientes', muestra dos botones.
      case PACIENTES:
        return (
          // Usamos un React.Fragment (<>) para agrupar los dos botones.
          <>
            <Button
              variant="outline-light"
              className="me-2" // Margen a la derecha para separar los botones.
              style={{ marginLeft: '960px' }} // Estilo adicional para margen derecho.
              onClick={() => navigate(DOCTORES)} // El botón "Volver" lleva a la página de doctores.
            >
              <i></i>
              Volver
            </Button>
            <Button
              variant="outline-light" // Un color diferente para destacar la acción de cerrar sesión.
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Cerrar Sesión
            </Button>
          </>
        );
      
      // Caso por defecto: para cualquier otra ruta (como la página de inicio '/'), muestra el botón para iniciar sesión.
      default:
        return (
          <Button
            variant="outline-light"
            onClick={() => navigate(LOGIN)}
          >
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Iniciar Sesión
          </Button>
        );
    }
  };

  return (
    // Se ha cambiado el color a 'bg-dark' para que los botones 'danger' y 'outline-light' resalten mejor.
    <div className="header bg-primary p-3 d-flex justify-content-between align-items-center">
      <div className="text-white fw-bold fs-4">
        Hospital San Juan
      </div>
      
      {/* Llama a la función que renderiza los botones correctos */}
      {renderButton()}
    </div>
  );
};

export default Header;