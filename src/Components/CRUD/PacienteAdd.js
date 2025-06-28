import axios from 'axios';
import { URL_PACIENTES } from '../../Constants/endpoints';

/**
 * @function agregarPaciente
 * @description Realiza una solicitud POST para agregar un nuevo paciente a la base de datos.
 * @param {object} paciente - El objeto del paciente a agregar.
 * @param {function} onComplete - La función de devolución de llamada que se ejecuta al completarse la solicitud.
 */
export const agregarPaciente = async (paciente, onComplete) => {
  try {
    // Realiza la solicitud POST a la URL de la API de pacientes.
    const response = await axios.post(URL_PACIENTES, paciente);
    // Si la solicitud es exitosa, muestra una alerta y ejecuta la devolución de llamada.
    if (response) {
      alert('Paciente agregado con éxito');
      onComplete();
    }
  } catch (err) {
    // Si hay un error, lo muestra en la consola y en una alerta.
    console.error('Error al agregar paciente:', err);
    alert('Hubo un error al agregar el paciente.');
  }
};