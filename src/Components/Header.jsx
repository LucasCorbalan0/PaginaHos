import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../Routers/router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header bg-primary p-3 d-flex justify-content-between align-items-center">
      <div className="text-white fw-bold fs-4">
        Hospital San Juan
      </div>
      
      <Button 
        variant="outline-light" 
        onClick={() => navigate(LOGIN)}
      >
        <i className="bi bi-box-arrow-in-right me-2"></i>
        Iniciar Sesión
      </Button>
    </div>
  );
};

export default Header;