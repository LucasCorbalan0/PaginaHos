import '../CSS/Main.css';
import { Link } from 'react-router-dom';


const Main = () => {

  return (
    <section class="contenedor">
        <div class="container" className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Tu Salud es Nuestra Prioridad</h1>
          <p id="descripcion" className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Brindamos atención médica de calidad con profesionales altamente <br/> capacitados y tecnología de vanguardia para
            cuidar de ti y tu familia.
          </p>
        </div>
        <div class="info" >
          <img src="https://i.pinimg.com/736x/c6/3e/4b/c63e4baabab225b16b85b9e7bcc05069.jpg" alt="" />
          <p> Vista del exterior del hospital, con su fachada principal, entrada de ambulancias y entorno urbano. La imagen muestra un edificio moderno rodeado de áreas verdes y señalización médica. </p>
        </div>
        <div class="sala">
          <p>Imagen de la sala de espera del hospital, equipada con filas de sillas para los pacientes, iluminación natural y un ambiente limpio y ordenado. Se observan carteles informativos en las paredes y, en algunos casos, personas aguardando su turno.</p>
          <img src="https://i.pinimg.com/736x/03/67/a2/0367a21ba305099d376b5f4034866802.jpg" alt="" />

        </div>
    </section>
    /* Carousel Section */
    
    

      
  
      
      
      

  );
};

export default Main;
