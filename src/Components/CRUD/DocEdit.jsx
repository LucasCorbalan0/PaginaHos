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
      const response = await axios.get(`${URL_DOCTORES}/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Error al cargar los datos del doctor:", error);
    }
  };

  useEffect(() => {
    getDoctor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL_DOCTORES}/${id}`, formData);
      navigate(DOCTORES);
    } catch (error) {
      console.error("Error al actualizar el doctor:", error);
    }
  };

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
