import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    Nama: '',
    Email: '',
    Pesan: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Kirim');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Menyusun pesan WhatsApp
    const message = `Saya ${formDetails.Nama}, email: ${formDetails.Email}, ingin menyampaikan pesan berikut: ${formDetails.Pesan}`;
    
    // Mengarahkan ke WhatsApp dengan pesan
    const whatsappUrl = `https://wa.me/6289524506009?text=${encodeURIComponent(message)}`;
    
    // Redirect ke URL WhatsApp
    window.open(whatsappUrl, '_blank');

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact us via WhatsApp</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} className="px-1">
                      <input type="text" value={formDetails.Nama} placeholder="Nama" onChange={(e) => onFormUpdate('Nama', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <input type="email" value={formDetails.Email} placeholder="Email" onChange={(e) => onFormUpdate('Email', e.target.value)} />
                    </Col>
                  </Row>
                  <Row>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.Pesan} placeholder="Pesan" onChange={(e) => onFormUpdate('Pesan', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
