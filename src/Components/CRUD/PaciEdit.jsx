import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_PACIENTES } from '../../Constants/endpoints';
import { PACIENTES } from '../../Routers/router';
import { Button, Form, Container, Card } from 'react-bootstrap';

const PaciEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const getPaciente = async () => {
    try {
      // Hacemos la petición GET para obtener los datos del paciente con el 'id' actual.
      const response = await axios.get(`${URL_PACIENTES}/${id}`);
      // Actualizamos el estado con los datos recibidos de la API.
      setFormData(response.data);
    } catch (error) {
      // Si ocurre un error, lo mostramos en la consola sin interrumpir al usuario con una alerta.
      console.error("Error al cargar datos del paciente:", error);
    }
  };

  // 'useEffect' se ejecuta después de que el componente se renderiza.
  useEffect(() => {
    // Llamamos a la función que busca los datos.
    getPaciente();
  }, [id]); // El efecto se volverá a ejecutar si el 'id' de la URL cambia.

  // --- MANEJADORES DE EVENTOS DEL FORMULARIO ---

  // Se activa cada vez que el usuario modifica un campo del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Se ejecuta cuando el usuario envía el formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hacemos una petición PUT para actualizar los datos del paciente.
      await axios.put(`${URL_PACIENTES}/${id}`, formData);
      // Si la actualización es exitosa, redirigimos al usuario a la lista de pacientes.
      navigate(PACIENTES);
    } catch (error) {
      // Si la actualización falla, mostramos el error en la consola.
      console.error("Error al actualizar el paciente:", error);
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Editar Paciente</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="text"
                name="contacto"
                value={formData.contacto}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
            <Button variant="secondary" onClick={() => navigate(PACIENTES)} className="ms-2">
              Cancelar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaciEdit;