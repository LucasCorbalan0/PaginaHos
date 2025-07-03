import React from 'react';
import Header from '../Components/Header';
import DoctorTable from '../Components/DoctorTable';
import Footer from '../Components/Footer';

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