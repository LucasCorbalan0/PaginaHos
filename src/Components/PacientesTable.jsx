import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Col, Row, Table } from "react-bootstrap";
import { URL_PACIENTES } from "../Constants/endpoints";
import { agregarPaciente } from "./CRUD/PacienteAdd";
import { eliminarPaciente } from "./CRUD/PacienteDelete";
import { useNavigate } from "react-router-dom";
import { EDITARPACIENTES, VIEWPACIENTES } from "../Routers/router";

/**
 * @component PacientesTable
 * @description Este componente muestra un formulario para agregar nuevos pacientes
 * y una tabla que lista todos los pacientes existentes, con la opción de eliminarlos.
 */
const PacientesTable = () => {
  // --- ESTADOS ---
  // Define un estado 'pacientes' para guardar el arreglo de pacientes que se obtiene de la API. Se inicializa como un arreglo vacío.
  const [pacientes, setPacientes] = useState([]);
  // Define un estado 'formData' para controlar los valores de los campos del formulario de agregar paciente.
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    dni: "",
  });
  const navigate = useNavigate();

  // --- EFECTO SECUNDARIO ---
  // useEffect se ejecuta una vez que el componente ha sido renderizado en el DOM.
  // El segundo argumento, `[]`, es un arreglo de dependencias vacío, lo que asegura que el efecto se ejecute solo una vez, al montarse el componente.
  useEffect(() => {
    cargarPacientes(); // Llama a la función para obtener los datos iniciales.
  }, []);

  // --- FUNCIONES CONTROLADORAS ---

  /**
   * @function cargarPacientes
   * @description Realiza una petición GET a la API para obtener la lista de todos los pacientes
   * y actualiza el estado 'pacientes' con los datos recibidos.
   */
  const cargarPacientes = async () => {
    try {
      const response = await axios.get(URL_PACIENTES);
      setPacientes(response.data); // Actualiza el estado con los datos de la respuesta.
    } catch (err) {
      // En caso de error en la petición, lo muestra en la consola del navegador.
      console.error("Error al cargar los pacientes:", err);
    }
  };

  /**
   * @function handleChange
   * @description Actualiza el estado 'formData' cada vez que el usuario modifica un campo del formulario.
   * @param {object} e - El objeto de evento del input que cambió.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData, // Copia todas las propiedades actuales del estado para no perderlas.
      [e.target.name]: e.target.value, // Actualiza la propiedad correspondiente al 'name' del input con su nuevo 'value'.
    });
  };

  /**
   * @function handleSubmit
   * @description Se invoca al enviar el formulario. Valida los datos y llama a la función para agregar un nuevo paciente.
   * @param {object} e - El objeto de evento del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue, que es el comportamiento por defecto de un formulario.
    // Validación simple para verificar que todos los campos del formulario están completos.
    if (
      !formData.id ||
      !formData.nombre ||
      !formData.apellido ||
      !formData.dni
    ) {
      alert("Completá todos los campos");
      return; // Si un campo está vacío, muestra una alerta y detiene la función.
    }
    // Llama a la función 'agregarPaciente', pasándole los datos del formulario y una función 'callback'.
    // Esta callback se ejecutará después de que el paciente se agregue con éxito.
    await agregarPaciente(formData, () => {
      cargarPacientes(); // Actualiza la tabla con el nuevo paciente.
      // Resetea los campos del formulario para que el usuario pueda agregar otro paciente.
      setFormData({ id: "", nombre: "", apellido: "", dni: "" });
    });
  };

  /**
   * @function handleEliminar
   * @description Se invoca al presionar el botón 'Eliminar' de un paciente en la tabla.
   * @param {number} id - El ID del paciente que se va a eliminar.
   */
  const handleEliminar = async (id) => {
    // Llama a la función 'eliminarPaciente', pasándole el id y la función para recargar la lista
    // como 'callback' para que la tabla se actualice inmediatamente después de la eliminación.
    await eliminarPaciente(id, cargarPacientes);
  };

  const handleVer = (id) => {
    navigate(`${VIEWPACIENTES}/${id}`);
  };

  const handleEditar = (id) => {
    navigate(`${EDITARPACIENTES}/${id}`);
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    // Componente Row de react-bootstrap para crear una fila en el sistema de grilla.
    <Row>
      {/* Columna para el formulario. Ocupará 4 de 12 columnas en dispositivos medianos (md) y superiores. */}
      <Col md={4}>
        <h4>Agregar Paciente</h4>
        {/* Componente Form que se encarga del envío de datos a través de la función handleSubmit. */}
        <Form onSubmit={handleSubmit}>
          {/* Cada Form.Group encapsula una etiqueta (Label) y un campo de entrada (Control). */}
          <Form.Group className="mb-2">
            <Form.Label>ID</Form.Label>
            {/* El 'name' del control debe coincidir con una clave del estado 'formData' para que 'handleChange' funcione. */}
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
          {/* El botón de tipo 'submit' activará la función 'onSubmit' del formulario. */}
          <Button variant="primary" type="submit" className="mt-2">
            Agregar Paciente
          </Button>
        </Form>
      </Col>

      {/* Columna para la tabla. Ocupará 8 de 12 columnas en dispositivos medianos (md) y superiores. */}
      <Col md={8} className="">
        <h4 className="mb-3">Listado</h4>
        {/* Componente Table con estilos predefinidos de react-bootstrap. */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Se usa el método .map() para iterar sobre el arreglo 'pacientes' del estado. */}
            {/* Por cada 'pac' en el arreglo, se genera una fila <tr> en la tabla. */}
            {pacientes.map((pac) => (
              // La prop 'key' es fundamental en React para identificar de forma única cada elemento en una lista.
              <tr key={pac.id}>
                <td>{pac.id}</td>
                <td>{pac.nombre}</td>
                <td>{pac.apellido}</td>
                <td>{pac.dni}</td>
                <td>
                  <Button
                    variant="info"
                    className="m-2 p-2"
                    onClick={() => handleVer(pac.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    variant="warning"
                    className="m-2 p-2"
                    onClick={() => navigate(`${EDITARPACIENTES}/${pac.id}`)}
                  >
                    Editar
                  </Button>
                  {/* Botón para eliminar. Su onClick llama a 'handleEliminar' pasándole el 'id' del paciente de esta fila. */}
                  <Button
                    variant="danger"
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

// Se exporta el componente PacientesTable para que pueda ser importado y utilizado en otras partes de la aplicación.
export default PacientesTable;
