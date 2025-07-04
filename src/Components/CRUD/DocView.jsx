"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { URL_DOCTORES } from "../../Constants/endpoints"
import { DOCTORES } from "../../Routers/router"
import { Button, Container, Card, Row, Col, Spinner } from "react-bootstrap"

const DocView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`${URL_DOCTORES}/${id}`)
        setDoctor(response.data)
      } catch (error) {
        console.error("Error al obtener el doctor:", error)
        alert("No se pudieron cargar los datos del doctor.")
      } finally {
        setLoading(false)
      }
    }

    fetchDoctor()
  }, [id])

  const pageStyle = {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    paddingTop: "20px",
    paddingBottom: "20px",
  }

  const cardStyle = {
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    backgroundColor: "white",
    maxWidth: "900px",
    margin: "0 auto"
  }

  const headerStyle = {
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "12px 12px 0 0",
    padding: "20px",
  }

  const bodyStyle = {
    padding: "25px",
  }

  const rowStyle = {
    paddingTop: "12px",
    paddingBottom: "12px",
    borderBottom: "1px solid #e9ecef",
  }

  const labelStyle = {
    fontWeight: "600",
    color: "#495057",
  }

  const valueStyle = {
    color: "#212529",
  }

  const specialtyStyle = {
    color: "#007bff",
    fontWeight: "500",
  }

  const buttonStyle = {
    borderRadius: "8px",
    padding: "8px 20px",
  }

  if (loading) {
    return (
      <div style={pageStyle}>
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <Spinner animation="border" role="status" />
            <div className="mt-2">
              <span>Cargando datos...</span>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  if (!doctor) {
    return (
      <div style={pageStyle}>
        <Container className="text-center mt-5">
          <div style={{ ...cardStyle, padding: "30px", maxWidth: "400px", margin: "0 auto" }}>
            <h4 style={{ color: "#6c757d", marginBottom: "20px" }}>No se encontró el doctor</h4>
            <Button variant="secondary" onClick={() => navigate(DOCTORES)} style={buttonStyle}>
              Volver a lista
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div style={pageStyle}>
      <Container className="my-4">
        <Card style={cardStyle}>
          <Card.Header style={headerStyle}>
            <h3 className="mb-0">Información del Doctor</h3>
          </Card.Header>
          <Card.Body style={bodyStyle}>
            <Row style={rowStyle}>
              <Col md={4} style={labelStyle}>
                Nombre:
              </Col>
              <Col md={8} style={valueStyle}>
                {doctor.nombre}
              </Col>
            </Row>

            <Row style={rowStyle}>
              <Col md={4} style={labelStyle}>
                Apellido:
              </Col>
              <Col md={8} style={valueStyle}>
                {doctor.apellido}
              </Col>
            </Row>

            <Row style={{ ...rowStyle, borderBottom: "none" }}>
              <Col md={4} style={labelStyle}>
                Especialidad:
              </Col>
              <Col md={8} style={specialtyStyle}>
                {doctor.especialidad}
              </Col>
            </Row>
            <Row style={rowStyle}>
              <Col md={4} style={labelStyle}>
                Contacto:
              </Col>
              <Col md={8} style={valueStyle}>
                {doctor.contacto}
              </Col>
            </Row>
            <Row style={rowStyle}>
              <Col md={4} style={labelStyle}>
                Dirección:
              </Col>
              <Col md={8} style={valueStyle}>
                {doctor.direccion}
              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" onClick={() => navigate(DOCTORES)} style={buttonStyle}>
                Volver a la lista
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default DocView
