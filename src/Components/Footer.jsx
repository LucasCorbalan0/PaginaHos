"use client"

import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const footerStyle = {
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    borderTop: "3px solid #007bff",
    marginTop: "50px",
    paddingTop: "50px",
    paddingBottom: "30px",
    color: "#6c757d",
  }

  const hospitalNameStyle = {
    color: "#495057",
    fontWeight: "700",
    fontSize: "1.4rem",
    marginBottom: "15px",
  }

  const servicesStyle = {
    color: "#6c757d",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  }

  const socialContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  }

  const socialButtonStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  }

  const facebookStyle = {
    ...socialButtonStyle,
    backgroundColor: "#1877f2",
    color: "white",
  }

  const instagramStyle = {
    ...socialButtonStyle,
    background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    color: "white",
  }

  const whatsappStyle = {
    ...socialButtonStyle,
    backgroundColor: "#25d366",
    color: "white",
  }

  const copyrightStyle = {
    fontSize: "0.9rem",
    color: "#adb5bd",
    marginTop: "15px",
    textAlign: "center",
    borderTop: "1px solid #dee2e6",
    paddingTop: "20px",
  }

  const contactInfoStyle = {
    color: "#6c757d",
    fontSize: "1rem",
    lineHeight: "1.8",
    marginBottom: "10px",
  }

  const sectionTitleStyle = {
    color: "#495057",
    fontWeight: "600",
    fontSize: "1.1rem",
    marginBottom: "20px",
  }

  const buttonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "14px 18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(0, 123, 255, 0.4)",
    zIndex: "1000",
    transition: "all 0.3s ease",
    display: showButton ? "block" : "none",
  }

  return (
    <>
      <footer style={footerStyle}>
        <Container>
          <Row>
            {/* Columna 1: Información del Hospital */}
            <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
              <div style={hospitalNameStyle}>🏥 Hospital San Juan</div>
              <div style={servicesStyle}>
                Atención médica de calidad las 24 horas del día.
                <br />
                Emergencias • Consultas • Especialidades
              </div>
            </Col>

            {/* Columna 2: Información de Contacto */}
            <Col md={4} className="text-center mb-4 mb-md-0">
              <div style={sectionTitleStyle}>📞 Contacto</div>
              <div style={contactInfoStyle}>
                <div className="mb-2">📞 (011) 4567-8900</div>
                <div className="mb-2">📧 info@hospitalsanjuan.com</div>
                
              </div>
            </Col>

            {/* Columna 3: Redes Sociales */}
            <Col md={4} className="text-center">
              <div style={sectionTitleStyle}>🌐 Redes Sociales</div>

              <div style={socialContainerStyle}>
                <button
                  style={facebookStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-4px)"
                    e.target.style.boxShadow = "0 8px 20px rgba(24, 119, 242, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)"
                  }}
                  onClick={() => window.open("https://facebook.com", "_blank")}
                  aria-label="Facebook"
                >
                  📘
                </button>

                <button
                  style={instagramStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-4px)"
                    e.target.style.boxShadow = "0 8px 20px rgba(225, 48, 108, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)"
                  }}
                  onClick={() => window.open("https://instagram.com", "_blank")}
                  aria-label="Instagram"
                >
                  📷
                </button>

                <button
                  style={whatsappStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-4px)"
                    e.target.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)"
                  }}
                  onClick={() => window.open("https://wa.me/5491123456789", "_blank")}
                  aria-label="WhatsApp"
                >
                  💬
                </button>
              </div>

              <div style={{ color: "#6c757d", fontSize: "0.95rem" }}>
                Síguenos para estar al día con nuestras novedades y consejos de salud.
              </div>
            </Col>
          </Row>

          {/* Copyright separado */}
          <Row>
            <Col>
              <div style={copyrightStyle}>© 2025 Hospital San Juan | Todos los derechos reservados</div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Botón flotante */}
      <button
        style={buttonStyle}
        onClick={scrollToTop}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#0056b3"
          e.target.style.transform = "translateY(-3px)"
          e.target.style.boxShadow = "0 8px 20px rgba(0, 123, 255, 0.5)"
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#007bff"
          e.target.style.transform = "translateY(0)"
          e.target.style.boxShadow = "0 6px 15px rgba(0, 123, 255, 0.4)"
        }}
        aria-label="Volver arriba"
      >
        ⬆️
      </button>
    </>
  )
}

export default Footer
