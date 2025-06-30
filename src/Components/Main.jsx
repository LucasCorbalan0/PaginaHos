import '../CSS/Main.css';


const Main = () => {

  return (
    <section class="contenedor">
      <div class="container" className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Tu Salud es Nuestra Prioridad</h1>
        <p id="descripcion" className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Brindamos atención médica de calidad con profesionales altamente <br /> capacitados y tecnología de vanguardia para
          cuidar de ti y tu familia.
        </p>
      </div>
      <div class="info" >
        <img src="https://i.pinimg.com/736x/c6/3e/4b/c63e4baabab225b16b85b9e7bcc05069.jpg" alt="" />
        <p> La imagen muestra el exterior del complejo hospitalario con su moderna fachada principal de cristal y múltiples niveles, entrada de ambulancias con bahía techada para emergencias, y un entorno urbano planificado con amplias áreas verdes y jardines paisajísticos que crean un ambiente terapéutico, complementado por señalización médica clara distribuida estratégicamente para facilitar la orientación de pacientes y visitantes. </p>
      </div>
      <div class="sala">
        <p>La imagen presenta la sala de espera del hospital con filas de sillas ergonómicas ordenadamente dispuestas, abundante iluminación natural a través de amplias ventanas y un ambiente impecablemente limpio. Las paredes exhiben carteles informativos sobre servicios médicos y campañas de salud, mientras algunos pacientes y acompañantes esperan pacientemente su turno, creando una atmósfera de calma y orden en este espacio funcional y acogedor.</p>
        <img src="https://i.pinimg.com/736x/03/67/a2/0367a21ba305099d376b5f4034866802.jpg" alt="" />
      </div>
      <div className='habitaciones'>
        <img src="https://i.pinimg.com/736x/d3/d4/fe/d3d4fefdc54aedd51959fac98421286b.jpg" alt="" />
        <p>La imagen muestra una habitación hospitalaria con cama médica ajustable, equipo médico básico como monitores y sistemas de llamado, decoración sencilla con colores suaves y mobiliario funcional que incluye mesitas, sillas para acompañantes y armarios, creando un ambiente cómodo y privado que favorece la recuperación del paciente.</p>
      </div>
      <div className='maquinas'>
        <p>La imagen muestra una sala de operaciones con mesa quirúrgica, sistemas de iluminación especializada, monitores médicos, equipos de anestesia y diagnóstico, junto con una sala de espera pre-quirúrgica equipada con camillas y ambiente controlado, todo diseñado con tecnología avanzada y condiciones de asepsia para garantizar procedimientos quirúrgicos seguros.</p>
        <img src="https://i.pinimg.com/736x/cc/4c/d7/cc4cd7e276543baac0c07cc4d904be8d.jpg" alt="" />
      </div>
      <h2 className='titulo'>Nuestros Doctores</h2>

      <div className='doctores'>
        <div class="card-moderna">
          < img src="https://i.pinimg.com/736x/28/ce/e5/28cee5ccca1c61928773b40c213f262d.jpg" alt="Tecnología" />
          <span>Dr. Juan Rodríguez</span>
          <p>Especialidad: Cardiología - Matrícula: MP12345 </p>
        </div>
        <div class="card-moderna">
          < img src="https://i.pinimg.com/736x/30/53/da/3053da7e5d6abb0b1411e77e73bcb66e.jpg" alt="Tecnología" />
          <span>Dr. Camila Garcia</span>
          <p>Especialidad: Pediatría - Matrícula: MP67890 </p>
        </div>
        <div class="card-moderna">
          < img src="https://i.pinimg.com/736x/34/6b/ef/346befa90450c7c065a18b630ea38b6c.jpg" alt="Tecnología" />
          <span>Dr. Pedro Lopez</span>
          <p>Especialidad: Neurología - Matrícula: MP45678 </p>
        </div>
      </div>

      <div className='doctores2'>
        <div class="card-moderna">
          < img src="https://i.pinimg.com/736x/45/ce/62/45ce623041f887b4faa7d15e457d3ea3.jpg" alt="Tecnología" />
          <span>Dr. Josefina Prieto</span>
          <p>Especialidad: Traumatología - Matrícula: MP64732 </p>
        </div>
        <div class="card-moderna">
          < img src="https://i.pinimg.com/736x/59/da/aa/59daaa07f0d77563235acad6fd53c2c0.jpg" alt="Tecnología" />
          <span>Dr. Nicolas Flores</span>
          <p>Especialidad: Neurologia  - Matrícula: MP63820 </p>
        </div>
        <div class="card-moderna">
          < img src="https://i.pinimg.com/736x/d7/e7/4f/d7e74fb2a8437ada7ac369e4dbb6053c.jpg" alt="Tecnología" />
          <span>Dr. Daniela Medina</span>
          <p>Especialidad: Ginecologia - Matrícula: MP24649 </p>
        </div>
      </div>

      
    <div className='global'>
      <div class="formulario-container">

        <form id="formularioCita">
          <h1 class="titulo2">Reservar Cita Médica</h1>

          <div class="grupo-campo">
            <label for="nombre">Nombre completo *</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>

          <div class="grupo-campo">
            <label for="telefono">Teléfono *</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>

          <div class="grupo-campo">
            <label for="especialidad">Especialidad *</label>
            <select id="especialidad" name="especialidad" required>
              <option value="">Seleccione una especialidad</option>
              <option value="cardiologia">Cardiología</option>
              <option value="pediatria">Pediatría</option>
              <option value="dermatologia">Dermatología</option>
              <option value="traumatologia">Traumatología</option>
              <option value="ginecologia">Ginecología</option>
              <option value="neurologia">Neurología</option>
            </select>
          </div>

          <div class="grupo-campo">
            <label for="fecha">Fecha preferida *</label>
            <input type="date" id="fecha" name="fecha" required />
          </div>

          <div class="grupo-campo">
            <label for="hora">Hora preferida *</label>
            <select id="hora" name="hora" required>
              <option value="">Seleccione una hora</option>
              <option value="08:00">08:00 AM</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="17:00">05:00 PM</option>
            </select>
          </div>

          <button type="submit" class="btn-enviar">Reservar Cita</button>
        </form>

        <div id="mensaje" class="mensaje">
          ¡Cita reservada exitosamente! Nos pondremos en contacto contigo para confirmar.

        </div>

      </div>
         <iframe className='mapa'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.113144333!2d-65.21837282452556!3d-26.836353390017567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c72c546fea5%3A0x46d0cbcf03b07ca3!2sHospital%20%C3%81ngel%20C.%20Padilla!5e0!3m2!1ses-419!2sar!4v1750728793443!5m2!1ses-419!2sar" 
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          />
    </div>

    </section>
    /* Carousel Section */

  );
};

export default Main;
