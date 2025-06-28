import React from 'react';
import Header from '../Components/Header';
import PacientesTable from '../Components/PacientesTable';
import Footer from '../Components/Footer';

/**
 * @component PacientePage
 * @description La página principal para administrar pacientes, que incluye el encabezado, la tabla de pacientes y el pie de página.
 */
const PacientePage = () => {
  return (
    <div>
        <Header/>
        <div className='p-4'>
            <PacientesTable/>
        </div>
        <Footer/>
    </div>
  )
}

export default PacientePage;