import React, { useState, useEffect } from "react"; import axios from "axios";
import { Button, Form, Col, Row, Table } from "react-bootstrap";
import { URL_DOCTORES } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";
import { PACIENTES, EDITARDOCTORES, VIEWDOCTORES } from "../Routers/router";

import { agregarDoctor } from "./CRUD/DoctorAdd";
import { eliminarDoctor } from "./CRUD/DoctorDelete";

const DoctorTable = () => {

  const [doctores, setDoctores] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    especialidad: "",
    contacto: "",
    direccion: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    cargarDoctores();
  }, []);

  const cargarDoctores = async () => {
    try {
      const response = await axios.get(URL_DOCTORES);
      setDoctores(response.data);
    } catch (err) {
      console.error("Error al cargar los doctores:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.id ||
      !formData.nombre ||
      !formData.apellido ||
      !formData.especialidad ||
      !formData.contacto ||
      !formData.direccion
    ) {
      alert("Completá todos los campos");
      return;
    }
    await agregarDoctor(formData, () => {
      cargarDoctores();
      setFormData({ id: "", nombre: "", apellido: "", especialidad: "", contacto: "", direccion: "" });
    });
  };

  const handleEliminar = async (id) => {
    await eliminarDoctor(id, cargarDoctores);
  };

  const handleVerPacientes = () => {
    navigate(PACIENTES);
  };

  const handleVer = (id) => {
    navigate(`${VIEWDOCTORES}/${id}`);
  };

  const handleEditar = (id) => {
    navigate(`${EDITARDOCTORES}/${id}`);
  };

  return (
    <Row>
      <Col md={4} className="p-4">
        <h4>Agregar Doctor</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Matrícula</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Especialidad</Form.Label>
            <Form.Control
              type="text"
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Contacto</Form.Label>
            <Form.Control
              type="text"
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Agregar Doctor
          </Button>
        </Form>
      </Col>

      <Col md={8} className="">
        <h4 className="mb-3">Listado</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Contacto</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {doctores.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.nombre}</td>
                <td>{doc.apellido}</td>
                <td>{doc.especialidad}</td>
                <td>{doc.contacto}</td>
                <td>{doc.direccion}</td>
                <td>
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => handleVer(doc.id)}
                    className="m-2 p-2"
                  >
                    Ver
                  </Button>
                  <Button
                    variant="outline-success"
                    className="m-2 p-2"
                    onClick={() => navigate(`${EDITARDOCTORES}/${doc.id}`)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="m-2 p-2"
                    onClick={() => handleEliminar(doc.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={handleVerPacientes}>
          Ver Pacientes
        </Button>
      </Col>
    </Row>
  );
};

export default DoctorTable;
