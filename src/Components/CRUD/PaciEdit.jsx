import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_PACIENTES } from '../../Constants/endpoints';
import { PACIENTES } from '../../Routers/router';
import { Button, Form, Container, Card } from 'react-bootstrap';

// Definimos el componente 'PaciEdit' que se encargará de la edición.
const PaciEdit = () => {
  // --- ESTADO Y HOOKS DE REACT ---

  // Usamos 'useParams' para extraer el 'id' del paciente de la URL.
  // Si la URL es /editpacientes/12, 'id' será "12".
  const { id } = useParams();
  // Obtenemos la función 'navigate' para poder redirigir al usuario.
  const navigate = useNavigate();

  // Creamos un estado llamado 'formData' para almacenar la información del paciente que se está editando.
  // 'setFormData' es la función que usaremos para actualizar estos datos.
  // Lo inicializamos con valores por defecto para que la aplicación no falle antes de cargar los datos reales.
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    contacto: '',
    direccion: ''
    
  });

  // --- EFECTO PARA CARGAR LOS DATOS INICIALES ---

  // 'useEffect' se ejecuta después de que el componente se renderiza por primera vez.
  // Es el lugar perfecto para hacer llamadas a APIs para buscar datos.
  useEffect(() => {
    // Creamos una función asíncrona dentro del efecto para poder usar 'await'.
    const fetchPaciente = async () => {
      try {
        // Hacemos una petición GET a la API, pidiendo los datos del paciente con el 'id' actual.
        const response = await axios.get(`${URL_PACIENTES}/${id}`);
        // Si la petición es exitosa, usamos 'setFormData' para llenar nuestro estado con los datos recibidos.
        // Esto hará que el formulario se muestre con la información actual del paciente.
        setFormData(response.data);
      } catch (error) {
        // Si ocurre un error (por ejemplo, el paciente no se encuentra), lo mostramos en la consola
        // y le avisamos al usuario con una alerta.
        console.error("Error al cargar datos del paciente:", error);
        alert("No se pudieron cargar los datos para editar.");
      }
    };
    // Ejecutamos la función que acabamos de definir.
    fetchPaciente();
  }, [id]); // El array [id] como segundo argumento asegura que este efecto se ejecute solo si el 'id' cambia.

  // --- MANEJADORES DE EVENTOS DEL FORMULARIO ---

  // Esta función se activa cada vez que el usuario modifica un campo del formulario.
  const handleChange = (e) => {
    // Extraemos el nombre ('name') y el valor ('value') del campo que se está editando.
    const { name, value } = e.target;
    // Actualizamos el estado 'formData'. Usamos el "spread operator" (...formData) para mantener
    // los valores de los otros campos y solo actualizamos el que cambió.
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Esta función se ejecuta cuando el usuario envía el formulario (al hacer clic en "Guardar Cambios").
  const handleSubmit = async (e) => {
    // Prevenimos el comportamiento por defecto del formulario, que es recargar la página.
    e.preventDefault();
    try {
      // Hacemos una petición PUT a la API para actualizar los datos del paciente.
      // Le enviamos el 'id' en la URL y los nuevos datos ('formData') en el cuerpo de la petición.
      await axios.put(`${URL_PACIENTES}/${id}`, formData);
      // Informamos al usuario que la operación fue un éxito.
      alert('Paciente actualizado con éxito!');
      // Redirigimos al usuario de vuelta a la página principal de pacientes.
      navigate(PACIENTES);
    } catch (error) {
      // Si la actualización falla, informamos al usuario y mostramos el error en la consola.
      console.error("Error al actualizar el paciente:", error);
      alert('Hubo un error al actualizar el paciente.');
    }
  };

  // --- JSX: LO QUE SE MUESTRA EN PANTALLA ---
  return (
    // 'Container' de Bootstrap para centrar el contenido y darle márgenes. 'mt-4' añade un margen en la parte superior.
    <Container className="mt-4">
      {/* Usamos un 'Card' para agrupar el formulario en un recuadro con estilo. */}
      <Card>
        <Card.Header>
          <h2>Editar Paciente</h2>
        </Card.Header>
        <Card.Body>
          {/* El 'Form' que se encarga de llamar a 'handleSubmit' cuando se envía. */}
          <Form onSubmit={handleSubmit}>
            {/* Agrupamos cada campo con su etiqueta. 'mb-3' es un margen inferior. */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              {/* El campo de texto (input). */}
              <Form.Control
                type="text"
                name="nombre" // El 'name' debe coincidir con la clave en el estado.
                value={formData.nombre} // Su valor está controlado por el estado 'formData'.
                onChange={handleChange} // Se actualiza a través de 'handleChange'.
                required // Indica que este campo no puede estar vacío.
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
            
            {/* El botón principal que envía el formulario. */}
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
            {/* Un botón secundario para cancelar y volver a la lista. 'ms-2' le da un margen a la izquierda. */}
            <Button variant="secondary" onClick={() => navigate(PACIENTES)} className="ms-2">
              Cancelar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación.
export default PaciEdit;