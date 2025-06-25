import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Botón flotante
const boton = document.createElement("button");
boton.id = "btnVolverArriba";
boton.innerHTML = "⬆";
document.body.appendChild(boton);

// Estilo
boton.style.position = "fixed";
boton.style.bottom = "30px";
boton.style.right = "30px";
boton.style.padding = "10px 15px";
boton.style.backgroundColor = "#007bff";
boton.style.color = "#fff";
boton.style.border = "none";
boton.style.borderRadius = "50%";
boton.style.fontSize = "18px";
boton.style.cursor = "pointer";
boton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
boton.style.zIndex = "1000";
boton.style.display = "none"; 

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});

boton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const Footer = () => {
  return (
    <footer className="bg-light text-muted border-top mt-5 pt-3 pb-2">
      <Container>
        <Row className="text-center">
          <Col md={6} className="mb-2 mb-md-0">
            <strong>Hospital San Juan</strong><br />
            Atención 24hs · Emergencias · Consultas generales
          </Col>
          <Col md={6}>
            <small>
              © 2025  | Todos los derechos reservados
            </small>
          </Col>
        </Row>
      </Container>
    
    </footer>
  
  );
};
export default Footer;
