import React from 'react'
import Header from '../Components/Header'
import DoctorTable from '../Components/CRUD/DoctorTable'

import Footer from '../Components/Footer'

const AdminPage = () => {
  return (
    <div>
        <Header/>
        <DoctorTable/>
        <Footer/>
    </div>
  )
}

export default AdminPage