import axios from 'axios';
import { URL_PACIENTES } from '../../Constants/endpoints';

/**
 * @function eliminarPaciente
 * @description Realiza una solicitud DELETE para eliminar un paciente de la base de datos.
 * @param {number} id - El ID del paciente a eliminar.
 * @param {function} onComplete - La función de devolución de llamada que se ejecuta al completarse la solicitud.
 */
export const eliminarPaciente = async (id, onComplete) => {
  try {
    // Realiza la solicitud DELETE a la URL de la API de pacientes con el ID del paciente.
    const response = await axios.delete(`${URL_PACIENTES}/${id}`);
    // Si la solicitud es exitosa, muestra una alerta y ejecuta la devolución de llamada.
    if (response) {
      alert('Paciente eliminado con éxito');
      onComplete();
    }
  } catch (err) {
    // Si hay un error, lo muestra en la consola y en una alerta.
    console.error('Error al eliminar paciente:', err);
    alert('Hubo un error al eliminar el paciente.');
  }
};