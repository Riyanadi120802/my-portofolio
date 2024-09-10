import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import footIcon1 from "../assets/nav-icon1.svg";
import footIcon2 from "../assets/github.png";
import footIcon3 from "../assets/nav-icon3.svg";
import MapComponent from "./MapComponent"; // Impor komponen peta
import { Envelope, GeoAlt, Book } from 'react-bootstrap-icons'; // Impor ikon dari react-bootstrap-icons

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Kolom untuk informasi dan sosial media */}
          <Col size={12} md={6} className="text-center text-md-start mb-4 mt-2">
            <div className="info-item mb-3">
              <Envelope size={24} />
              <p><a href="mailto:Riyanadi083@gmail.com">Riyanadi083@gmail.com</a></p>
            </div>
            <div className="info-item mb-3">
              <GeoAlt size={24} />
              <p>Sragen, Center of Java, Indonesia</p>
            </div>
            <div className="info-item mb-3">
              <Book size={24} />
              <p>Pendidikan: Bachelor of Informatics</p>
            </div>
            <div className="social-icon2 mt-4">
              <a href="https://www.linkedin.com/in/riyan-adi-1282ras/" target="_blank" rel="noopener noreferrer">
                <img src={footIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/Riyanadi120802" target="_blank" rel="noopener noreferrer">
                <img src={footIcon2} alt="GitHub Icon" />
              </a>
              <a href="https://www.instagram.com/_rynads/" target="_blank" rel="noopener noreferrer">
                <img src={footIcon3} alt="Instagram Icon" />
              </a>
            </div>
          </Col>
          {/* Kolom untuk logo dan peta */}
          <Col size={12} md={6} className="text-center text-md-start">
            <h2 className="brand">RIYAN ADI SAPUTRO</h2>
            <div className="map-container">
              <MapComponent /> {/* Tambahkan komponen peta */}
            </div>
          </Col>
        </Row>
        {/* Baris untuk copyright */}
        <Row className="justify-content-center">
          <Col size={12} className="text-center">
            <p className="cp">Copyright 2024 (Riyan Adi). Inspired by webdecoded</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
