import axios from 'axios';
import { URL_DOCTORES } from '../../Constants/endpoints';

export const agregarDoctor = async (doctor, onComplete) => {
  try {
    const response = await axios.post(URL_DOCTORES, doctor);
    if (response) {
      alert('Doctor agregado con éxito');
      onComplete();
    }
  } catch (err) {
    console.error('Error al agregar doctor:', err);
    alert('Hubo un error al agregar el doctor.');
  }
};