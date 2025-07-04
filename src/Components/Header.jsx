import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME, LOGIN, DOCTORES, PACIENTES } from '../Routers/router';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate(HOME);
  };

  const cambioButton = () => {
    switch (location.pathname) {
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

      case PACIENTES:
        return (
          <>
            <Button
              variant="outline-light"
              className="me-2"
              style={{ marginLeft: '960px' }}
              onClick={() => navigate(DOCTORES)}
            >
              <i className="bi bi-arrow-left-circle me-2"></i>
              Volver
            </Button>
            <Button
              variant="outline-light"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Cerrar Sesión
            </Button>
          </>
        );
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
    <div className="header bg-primary p-3 d-flex justify-content-between align-items-center">
      <div className="text-white fw-bold fs-4">
        Hospital San Juan
      </div>
      
      {cambioButton()}
    </div>
  );
};

export default Header;