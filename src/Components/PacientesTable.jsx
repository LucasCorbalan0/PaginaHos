import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Col, Row, Table } from "react-bootstrap";
import { URL_PACIENTES } from "../Constants/endpoints";
import { agregarPaciente } from "./CRUD/PacienteAdd";
import { eliminarPaciente } from "./CRUD/PacienteDelete";
import { useNavigate } from "react-router-dom";
import { EDITARPACIENTES, VIEWPACIENTES } from "../Routers/router";

const PacientesTable = () => {
  const [pacientes, setPacientes] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    dni: "",
    contacto: "",
    Direccion: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    cargarPacientes();
  }, []);

  const cargarPacientes = async () => {
    try {
      const response = await axios.get(URL_PACIENTES);
      setPacientes(response.data);
    } catch (err) {
      console.error("Error al cargar los pacientes:", err);
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
      !formData.dni ||
      !formData.contacto ||
      !formData.direccion
    ) {
      alert("Completá todos los campos");
      return;
    }
    await agregarPaciente(formData, () => {
      cargarPacientes();
      setFormData({ id: "", nombre: "", apellido: "", dni: "", contacto: "", direccion: "" });
    });
  };

  const handleEliminar = async (id) => {
    await eliminarPaciente(id, cargarPacientes);
  };

  const handleVer = (id) => {
    navigate(`${VIEWPACIENTES}/${id}`);
  };

  const handleEditar = (id) => {
    navigate(`${EDITARPACIENTES}/${id}`);
  };

  return (
    <Row>
      <Col md={4}>
        <h4>Agregar Paciente</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>ID</Form.Label>
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
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              name="dni"
              value={formData.dni}
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
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              name="Direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-75"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Agregar Paciente
          </Button>
        </Form>
      </Col>

      <Col md={8} className="">
        <h4 className="mb-3">Listado</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Contacto</th>
              <th>Direccion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((pac) => (
              <tr key={pac.id}>
                <td>{pac.id}</td>
                <td>{pac.nombre}</td>
                <td>{pac.apellido}</td>
                <td>{pac.dni}</td>
                <td>{pac.contacto}</td> 
                <td>{pac.direccion}</td>
                <td>
                  <Button
                    variant="outline-info"
                    className="m-2 p-2"
                    onClick={() => handleVer(pac.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    variant="outline-success"
                    className="m-2 p-2"
                    onClick={() => navigate(`${EDITARPACIENTES}/${pac.id}`)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="m-2 p-2"
                    onClick={() => handleEliminar(pac.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default PacientesTable;
