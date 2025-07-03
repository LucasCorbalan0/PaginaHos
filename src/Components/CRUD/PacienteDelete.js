import axios from 'axios';
import { URL_PACIENTES } from '../../Constants/endpoints';

export const eliminarPaciente = async (id, onComplete) => {
  if (!window.confirm("¿Estás seguro que querés eliminar este paciente?")) {
    return;
  }

  try {
    const response = await axios.delete(`${URL_PACIENTES}/${id}`);
    if (response) {
      alert('Paciente eliminado con éxito');
      onComplete();
    }
  } catch (err) {
    console.error('Error al eliminar paciente:', err);
    alert('Hubo un error al eliminar el paciente.');
  }
};
