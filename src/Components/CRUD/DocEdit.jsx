// Importamos las herramientas necesarias de React y otras librerías.
import React, { useState, useEffect } from 'react'; // 'useState' para manejar el estado y 'useEffect' para efectos secundarios (como llamar a una API).
import { useParams, useNavigate } from 'react-router-dom'; // 'useParams' para leer parámetros de la URL (como el ID del doctor) y 'useNavigate' para redirigir al usuario.
import axios from 'axios'; // Para hacer peticiones HTTP al servidor (API).
import { URL_DOCTORES } from '../../Constants/endpoints'; // La dirección URL base de la API de doctores.
import { DOCTORES } from '../../Routers/router'; // La ruta de la página del listado de doctores, para poder volver a ella.
import { Button, Form, Container, Card } from 'react-bootstrap'; // Componentes visuales de React-Bootstrap para que se vea bien.

// Definimos el componente funcional 'DocEdit'.
const DocEdit = () => {
  // --- HOOKS Y ESTADO ---

  // 'useParams' nos da un objeto con los parámetros de la URL. Aquí sacamos el 'id'.
  // Por ejemplo, si la URL es /editdoctores/5, 'id' será "5".
  const { id } = useParams();
  // 'useNavigate' nos da una función para poder navegar a otras páginas.
  const navigate = useNavigate();

  // 'useState' crea una variable de estado para guardar los datos del formulario.
  // 'formData' es el objeto con los datos, y 'setFormData' es la función para actualizarlo.
  // Lo inicializamos con campos vacíos para evitar errores al principio.
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    especialidad: '',
    contacto: '',
    direccion: ''
  });

  // --- EFECTO PARA CARGAR DATOS ---

  // 'useEffect' ejecuta el código que tiene adentro cuando el componente se monta (carga)
  // o cuando una de sus dependencias (en este caso, 'id') cambia.
  useEffect(() => {
    // Definimos una función asíncrona para buscar los datos del doctor en el servidor.
    const fetchDoctor = async () => {
      try {
        // Hacemos una petición GET a la API para obtener el doctor con el 'id' específico.
        const response = await axios.get(`${URL_DOCTORES}/${id}`);
        // Cuando recibimos los datos, los usamos para actualizar nuestro estado 'formData'.
        // Esto llenará el formulario con los datos actuales del doctor.
        setFormData(response.data);
      } catch (error) {
        // Si hay un error en la petición (ej: el doctor no existe, o el servidor falla),
        // lo mostramos en la consola y avisamos al usuario con una alerta.
        console.error("Error al cargar los datos del doctor:", error);
        alert("No se pudieron cargar los datos para editar.");
      }
    };
    // Llamamos a la función para que se ejecute.
    fetchDoctor();
  }, [id]); // El array [id] significa que este efecto solo se volverá a ejecutar si el 'id' de la URL cambia.

  // --- MANEJADORES DE EVENTOS ---

  // Esta función se ejecuta cada vez que el usuario escribe en uno de los campos del formulario.
  const handleChange = (e) => {
    // Obtenemos el 'name' (ej: "nombre") y el 'value' (ej: "Carlos") del campo que cambió.
    const { name, value } = e.target;
    // Actualizamos el estado 'formData', manteniendo los datos que no cambiaron (...formData)
    // y actualizando solo el campo que corresponde ([name]: value).
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Esta función se ejecuta cuando el usuario hace clic en el botón de tipo "submit" (Guardar Cambios).
  const handleSubmit = async (e) => {
    // 'e.preventDefault()' evita que el formulario se envíe de la forma tradicional y recargue la página.
    e.preventDefault();
    try {
      // Enviamos una petición PUT a la API para actualizar el doctor con el 'id' correspondiente.
      // Le pasamos 'formData', que contiene los datos nuevos que el usuario escribió.
      await axios.put(`${URL_DOCTORES}/${id}`, formData);
      // Si todo sale bien, mostramos una alerta de éxito.
      alert('Doctor actualizado con éxito!');
      // Y usamos 'navigate' para llevar al usuario de vuelta a la lista de doctores.
      navigate(DOCTORES);
    } catch (error) {
      // Si la actualización falla, lo mostramos en la consola y avisamos al usuario.
      console.error("Error al actualizar el doctor:", error);
      alert('Hubo un error al actualizar el doctor.');
    }
  };

  // --- RENDERIZADO DEL COMPONENTE (LO QUE SE VE EN PANTALLA) ---
  return (
    // 'Container' centra y organiza el contenido. 'mt-4' le da un margen superior.
    <Container className="mt-4">
      {/* 'Card' es un contenedor con bordes y un estilo bonito. */}
      <Card>
        {/* 'Card.Header' es la sección del título de la tarjeta. */}
        <Card.Header>
          <h2>Editar Doctor</h2>
        </Card.Header>
        {/* 'Card.Body' es el cuerpo principal de la tarjeta. */}
        <Card.Body>
          {/* El componente 'Form' de Bootstrap. Llama a 'handleSubmit' cuando se envía. */}
          <Form onSubmit={handleSubmit}>
            {/* 'Form.Group' agrupa una etiqueta ('Label') y un campo de texto ('Control'). 'mb-3' es un margen inferior. */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              {/* 'Form.Control' es el campo de texto (input). */}
              <Form.Control
                type="text"
                name="nombre" // El 'name' debe coincidir con la clave en el estado 'formData'.
                value={formData.nombre} // El valor que se muestra en el campo viene del estado.
                onChange={handleChange} // La función que se llama cuando el usuario escribe.
                required // Hace que este campo sea obligatorio.
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
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                name="especialidad"
                value={formData.especialidad}
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
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Un botón de tipo 'submit' que activará el 'onSubmit' del formulario. */}
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
            {/* Un botón secundario que, al hacer clic, navega de vuelta a la lista de doctores. 'ms-2' es un margen a la izquierda. */}
            <Button variant="secondary" onClick={() => navigate(DOCTORES)} className="ms-2">
              Cancelar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

// Exportamos el componente para poder usarlo en otras partes de la aplicación (como en App.js).
export default DocEdit;