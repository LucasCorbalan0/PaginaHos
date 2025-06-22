
import '../CSS/Main.css';
import { Link } from 'react-router-dom';


const Main = () => {

  return (
    <div className="main-container">

          <h1 className="display-4">Bienvenidos al Hospital San Juan</h1>
          <p className="lead">Cuidando tu salud con excelencia y calidez humana desde 1985</p>
          <Link to='/pacientes' className="btn btn-primary">Ver Pacientes</Link>
          <Link to='/doctores' className="btn btn-outline-primary">Conozca a Nuestros Doctores</Link>
    </div>

  );
};

export default Main;
