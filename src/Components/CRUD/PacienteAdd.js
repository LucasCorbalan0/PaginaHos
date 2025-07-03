import axios from 'axios';
import { URL_PACIENTES } from '../../Constants/endpoints';

export const agregarPaciente = async (paciente, onComplete) => {
  try {
    const response = await axios.post(URL_PACIENTES, paciente);
    if (response) {
      alert('Paciente agregado con éxito');
      onComplete();
    }
  } catch (err) {
    console.error('Error al agregar paciente:', err);
    alert('Hubo un error al agregar el paciente.');
  }
};