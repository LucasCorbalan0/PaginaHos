import React from 'react'
import Header from '../Components/Header'
import CrearTable from '../Components/CRUD/CrearTable'
import Footer from '../Components/Footer'

const AdminPage = () => {
  return (
    <div>
        <Header/>
        <CrearTable/>
        <Footer/>
    </div>
  )
}

export default AdminPage