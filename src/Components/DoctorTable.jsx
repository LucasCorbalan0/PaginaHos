import React, { useState, useEffect } from "react"; import axios from "axios";
import { Button, Form, Col, Row, Table } from "react-bootstrap";
import { URL_DOCTORES } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";
import { PACIENTES, EDITARDOCTORES, VIEWDOCTORES } from "../Routers/router";

// Importa las funciones CRUD (Crear, Leer, Actualizar, Eliminar) desde otros archivos para mantener el código organizado.
import { agregarDoctor } from "./CRUD/DoctorAdd"; // Función para agregar un nuevo doctor.
import { eliminarDoctor } from "./CRUD/DoctorDelete"; // Función para eliminar un doctor.

/**
 * @component DoctorTable
 * @description Un componente que renderiza un formulario para agregar doctores
 * y una tabla para mostrar, y eliminar los doctores existentes.
 */
const DoctorTable = () => {
  // --- ESTADOS DEL COMPONENTE ---

  // Estado para almacenar la lista de doctores obtenida de la API. Inicializa como un array vacío.
  const [doctores, setDoctores] = useState([]);
  // Estado para manejar los datos del formulario de "Agregar Doctor". Cada campo corresponde a un input.
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    especialidad: "",
  });

  // Hook de react-router-dom que nos permite navegar a otras páginas.
  const navigate = useNavigate();

  // --- EFECTOS SECUNDARIOS ---

  // useEffect se ejecuta después de que el componente se monta en el DOM.
  // El array vacío `[]` como segundo argumento asegura que se ejecute solo una vez.
  useEffect(() => {
    cargarDoctores(); // Llama a la función para obtener los datos de los doctores.
  }, []);

  // --- FUNCIONES ---

  /**
   * @function cargarDoctores
   * @description Obtiene la lista de doctores desde la API usando axios
   * y actualiza el estado 'doctores' con la respuesta.
   */
  const cargarDoctores = async () => {
    try {
      // Realiza una solicitud GET a la URL de la API de doctores.
      const response = await axios.get(URL_DOCTORES);
      // Actualiza el estado 'doctores' con los datos recibidos (response.data).
      setDoctores(response.data);
    } catch (err) {
      // Si ocurre un error durante la solicitud, se muestra en la consola.
      console.error("Error al cargar los doctores:", err);
    }
  };

  /**
   * @function handleChange
   * @description Se ejecuta cada vez que el usuario escribe en un campo del formulario.
   * Actualiza el estado 'formData' de forma dinámica.
   * @param {object} e - El objeto de evento del input.
   */
  const handleChange = (e) => {
    // Actualiza el estado del formulario.
    setFormData({
      ...formData, // Mantiene los valores actuales de los otros campos.
      [e.target.name]: e.target.value, // Actualiza el campo que cambió (identificado por su 'name').
    });
  };

  /**
   * @function handleSubmit
   * @description Se ejecuta cuando se envía el formulario para agregar un nuevo doctor.
   * @param {object} e - El objeto de evento del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).
    // Validación simple para asegurar que ningún campo esté vacío.
    if (
      !formData.id ||
      !formData.nombre ||
      !formData.apellido ||
      !formData.especialidad
    ) {
      alert("Completá todos los campos");
      return; // Detiene la ejecución si la validación falla.
    }
    // Llama a la función externa 'agregarDoctor' pasándole los datos del formulario.
    // También le pasa una función de 'callback' que se ejecutará si el doctor se agrega con éxito.
    await agregarDoctor(formData, () => {
      cargarDoctores(); // Vuelve a cargar la lista de doctores para mostrar el nuevo registro.
      // Limpia el formulario reseteando el estado 'formData'.
      setFormData({ id: "", nombre: "", apellido: "", especialidad: "" });
    });
  };

  /**
   * @function handleEliminar
   * @description Se ejecuta al hacer clic en el botón "Eliminar" de una fila.
   * @param {number} id - El ID del doctor a eliminar.
   */
  const handleEliminar = async (id) => {
    // Llama a la función externa 'eliminarDoctor', pasándole el ID y la función 'cargarDoctores'
    // como callback para que se ejecute después de eliminar y así actualizar la tabla.
    await eliminarDoctor(id, cargarDoctores);
  };

  /**
   * @function handleVerPacientes
   * @description Navega a la página de pacientes cuando se hace clic en el botón.
   */
  const handleVerPacientes = () => {
    navigate(PACIENTES); // Usa la función navigate para cambiar de ruta.
  };

  const handleVer = (id) => {
    navigate(`${VIEWDOCTORES}/${id}`);
  };

  const handleEditar = (id) => {
    navigate(`${EDITARDOCTORES}/${id}`);
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    // 'Row' es un componente de React Bootstrap que actúa como un contenedor de fila para el sistema de grilla.
    <Row>
      {/* Columna del Formulario. 'md={4}' significa que en pantallas medianas o más grandes, ocupará 4 de 12 columnas. */}
      <Col md={4} className="p-4">
        <h4>Agregar Doctor</h4>
        {/* Componente Form de React Bootstrap. Se le asigna la función handleSubmit al evento onSubmit. */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Matrícula</Form.Label>
            {/* El 'name' debe coincidir con la clave en el estado 'formData'. 'value' y 'onChange' conectan el input con el estado. */}
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
          {/* Botón de tipo 'submit' que, al ser presionado dentro de un <Form>, dispara el evento onSubmit del formulario. */}
          <Button variant="primary" type="submit" className="mt-2">
            Agregar Doctor
          </Button>
        </Form>
      </Col>

      {/* Columna de la Tabla. 'md={8}' ocupa las 8 columnas restantes en pantallas medianas o más grandes. */}
      <Col md={8} className="">
        <h4 className="mb-3">Listado</h4>
        {/* Tabla con estilos de Bootstrap: 'striped' (filas alternadas), 'bordered' (con bordes), 'hover' (resalta fila al pasar el ratón). */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Se itera sobre el array 'doctores' del estado. Por cada doctor, se crea una fila <tr> en la tabla. */}
            {doctores.map((doc) => (
              // 'key' es un atributo especial en React que ayuda a identificar qué elementos han cambiado, se han agregado o eliminado.
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.nombre}</td>
                <td>{doc.apellido}</td>
                <td>{doc.especialidad}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleVer(doc.id)}
                    className="m-2 p-2"
                  >
                    Ver
                  </Button>
                  <Button
                    variant="warning"
                    className="m-2 p-2"
                    onClick={() => navigate(`${EDITARDOCTORES}/${doc.id}`)}
                  >
                    Editar
                  </Button>
                  {/* Botón para eliminar. El evento onClick llama a handleEliminar pasándole el ID del doctor de esta fila. */}
                  <Button
                    variant="danger"
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
        {/* Botón para navegar a la vista de pacientes. */}
        <Button variant="success" onClick={handleVerPacientes}>
          Ver Pacientes
        </Button>
      </Col>
    </Row>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.
export default DoctorTable;
