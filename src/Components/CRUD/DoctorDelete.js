import axios from 'axios';
import { URL_DOCTORES } from '../../Constants/endpoints';

/**
 * @function eliminarDoctor
 * @description Realiza una solicitud DELETE para eliminar un doctor de la base de datos.
 * @param {number} id - El ID del doctor a eliminar.
 * @param {function} onComplete - La función de devolución de llamada que se ejecuta al completarse la solicitud.
 */
export const eliminarDoctor = async (id, onComplete) => {
  try {
    // Realiza la solicitud DELETE a la URL de la API de doctores con el ID del doctor.
    const response = await axios.delete(`${URL_DOCTORES}/${id}`);
    // Si la solicitud es exitosa, muestra una alerta y ejecuta la devolución de llamada.
    if (response) {
      alert('Doctor eliminado con éxito');
      onComplete();
    }
  } catch (err) {
    // Si hay un error, lo muestra en la consola y en una alerta.
    console.error('Error al eliminar doctor:', err);
    alert('Hubo un error al eliminar el doctor.');
  }
};