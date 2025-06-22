import React from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

//Ejemplo sin usar db.json//


const ViewDoctores = () => {
  // Datos de ejemplo - reemplazar con datos reales
  const doctores = [
    { id: 1, nombre: 'Dr. Carlos López', especialidad: 'Cardiología', matricula: 'MP12345' },
    { id: 2, nombre: 'Dra. Ana García', especialidad: 'Pediatría', matricula: 'MP67890' },
    // Agregar más doctores según sea necesario
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <Container className="my-4 flex-grow-1">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Lista de Doctores</h2>
        </div>
        
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Matrícula</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {doctores.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.nombre}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.matricula}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    Editar
                  </Button>
                  <Button variant="danger" size="sm">
                    Eliminar
                  </Button>
                  <Button variant="primary" size="sm" className="ms-2">
                    Agregar Doctor
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

export default ViewDoctores;