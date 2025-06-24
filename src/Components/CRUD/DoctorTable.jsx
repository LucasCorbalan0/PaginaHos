import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form, Container, Row, Col } from 'react-bootstrap';
import TablaPacientes from './PacientesTable';

const Creartabla = () => {
  const [doctores, setDoctores] = useState([]);
  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  useEffect(() => {
    cargarDoctores();
  }, []);

  const cargarDoctores = () => {
    axios.get('http://localhost:3000/doctores')
      .then((res) => setDoctores(res.data))
      .catch((err) => console.log('Error al cargar doctores:', err));
  };

  const agregarDoctor = () => {
    if (!matricula || !nombre || !apellido || !especialidad) {
      alert('Completá todos los campos');
      return;
    }

    const nuevoDoctor = {
      id: matricula, 
      nombre,
      apellido,
      especialidad
    };

    axios.post('http://localhost:3000/doctores', nuevoDoctor)
      .then(() => {
        cargarDoctores();
        setMatricula('');
        setNombre('');
        setApellido('');
        setEspecialidad('');
      })
      .catch((err) => console.log('Error al agregar doctor:', err));
  };

  const eliminarDoctor = (id) => {
    axios.delete(`http://localhost:3000/doctores/${id}`)
      .then(() => cargarDoctores())
      .catch((err) => console.log('Error al eliminar doctor:', err));
  };
  const [mostrarPacientes, setMostrarPacientes] = useState(false);

  return (
    <Container fluid className="mt-4">
      <h2 className="mb-4 text-center">Gestión de Doctores</h2>
      <Row>
        <Col md={4} className="ps-0 pe-4 border-end">
          <h4>Agregar Doctor</h4>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Matrícula</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número de matrícula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                className='w-75'
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className='w-75'
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Pérez"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className='w-75'
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Cardiología"
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                className='w-75'
              />
            </Form.Group>

            <Button variant="primary" onClick={agregarDoctor}className='mt-2'>
              Agregar Doctor
            </Button>
          </Form>
        </Col>

        <Col md={8} className="ps-4">
          <h4 className="mb-3">Listado</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Matrícula</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Especialidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctores.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.nombre}</td>
                  <td>{doc.apellido}</td>
                  <td>{doc.especialidad}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => eliminarDoctor(doc.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='d-flex justify-content-end mt-5'>
            <Button
              variant="info"
              size="lg"
              onClick={() => setMostrarPacientes(!mostrarPacientes)}
            >
              {mostrarPacientes ? 'Ocultar Pacientes' : 'Ver Pacientes'}
            </Button>

          </div>
          {mostrarPacientes && (
            <Row className='mt-5'>
              <Col md={4} className='ps-0 pe -4 border-end'>
                <h4>Pacientes</h4>
                <TablaPacientes />
              </Col>
            </Row>  
          )}
        </Col>                                                                        
      </Row>
    </Container>          
  );
}

export default Creartabla;