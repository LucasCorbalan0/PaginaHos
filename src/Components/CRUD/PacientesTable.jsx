import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const TablaPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    cargarPacientes();
  }, []);

  const cargarPacientes = () => {
    axios.get('http://localhost:3000/pacientes')
      .then((res) => setPacientes(res.data))
      .catch((err) => console.log('Error al cargar pacientes:', err));
  };

  const eliminarPaciente = (id) => {
    axios.delete(`http://localhost:3000/pacientes/${id}`)
      .then(() => cargarPacientes())
      .catch((err) => console.log('Error al eliminar paciente:', err));
  };

  return (
    <>
      <h4 className="mt-4">Listado de Pacientes</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.apellido}</td>
              <td>{p.dni}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarPaciente(p.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TablaPacientes;