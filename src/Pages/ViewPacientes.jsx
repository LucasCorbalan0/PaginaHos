import { Container, Table, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

//Ejemplo sin usar db.json//

const ViewPacientes = () => {
  // Datos de ejemplo - reemplazar con datos reales
  const pacientes = [
    { id: 1, nombre: 'Juan Perez', dni: '12345678A', email: 'juan@example.com' },
    // Agregar más pacientes según sea necesario
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <Container className="my-4 flex-grow-1">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Lista de Pacientes</h2>
          <Button variant="primary">
            Agregar Paciente
          </Button>
        </div>
        
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.id}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.dni}</td>
                <td>{paciente.email}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    Editar
                  </Button>
                  <Button variant="danger" size="sm">
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      
      <Footer />
    </div>
  );
};

export default ViewPacientes;