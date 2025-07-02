import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_DOCTORES } from "../../Constants/endpoints";
import { DOCTORES } from "../../Routers/router";
import { Button, Form, Container, Card } from "react-bootstrap";

const DocEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const getDoctor = async () => {
    try {
      // Hacemos una petición GET a la API para obtener el doctor con el 'id' específico.
      const response = await axios.get(`${URL_DOCTORES}/${id}`); // Actualizamos el estado 'formData' con los datos recibidos.
      setFormData(response.data);
    } catch (error) {
      // Si hay un error, lo mostramos en la consola sin interrumpir al usuario con una alerta.
      console.error("Error al cargar los datos del doctor:", error);
    }
  }; // 'useEffect' ejecuta el código que tiene adentro solo cuando el componente se monta por primera vez.

  useEffect(() => {
    // Llamamos a la función para que se ejecute al cargar el componente.
    getDoctor();
  }, [id]); // Mantenemos [id] como dependencia por si el ID en la URL pudiera cambiar dinámicamente. // --- MANEJADORES DE EVENTOS --- // Esta función se ejecuta cada vez que el usuario escribe en un campo.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; // Esta función se ejecuta cuando se envía el formulario.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviamos la petición PUT para actualizar el doctor.
      await axios.put(`${URL_DOCTORES}/${id}`, formData); // Si todo sale bien, redirigimos al usuario a la lista de doctores.
      navigate(DOCTORES);
    } catch (error) {
      // Si la actualización falla, lo mostramos en la consola.
      console.error("Error al actualizar el doctor:", error);
    }
  }; // --- RENDERIZADO DEL COMPONENTE (LO QUE SE VE EN PANTALLA) ---

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Editar Doctor</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={formData.apellido || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                name="especialidad"
                value={formData.especialidad || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contacto</Form.Label>
              <Form.Control                
                type="text"
                name="contacto"
                value={formData.contacto || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                value={formData.direccion || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(DOCTORES)}
              className="ms-2"
            >
              Cancelar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DocEdit;
