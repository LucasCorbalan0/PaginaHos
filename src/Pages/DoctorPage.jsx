import React from 'react';
import Header from '../Components/Header';
import DoctorTable from '../Components/DoctorTable';
import Footer from '../Components/Footer';

/**
 * @component DoctorPage
 * @description La página principal para administrar doctores, que incluye el encabezado, la tabla de doctores y el pie de página.
 */
const DoctorPage = () => {
  return (
    <div>
        <Header/>
        <div className='p-4'>
            <DoctorTable/>
        </div>
        <Footer/>
    </div>
  )
}

export default DoctorPage