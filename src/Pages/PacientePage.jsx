import React from 'react';
import Header from '../Components/Header';
import PacientesTable from '../Components/PacientesTable';
import Footer from '../Components/Footer';

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