import axios from 'axios';
import { URL_DOCTORES } from '../../Constants/endpoints';

export const eliminarDoctor = async (id, onComplete) => {
  if(!window.confirm('¿Estas seguro que quieres eliminar este doctor?')) {
    return;
  }
  try {
    const response = await axios.delete(`${URL_DOCTORES}/${id}`);
    if (response) {
      alert('Doctor eliminado con éxito');
      onComplete();
    }
  } catch (err) {
    console.error('Error al eliminar doctor:', err);
    alert('Hubo un error al eliminar el doctor.');
  }
};  