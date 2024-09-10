import {Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ImgProject1 from "../assets/Project1.png";
import ImgProject2 from "../assets/Project2.png";
import ImgProject3 from "../assets/Project3.png";
import ornamen from "../assets/color-sharp.png";
import 'animate.css'
import TrackVisibility from "react-on-screen";


export const Project = () => {

    const projects = [
        {
          title: "Model Computer Vision Fashion",
          description: "Membuat model AI untuk rekomendasi produk fashion",
          imgUrl: ImgProject1,
        },
        {
          title: "Website Pengajuan Proposal Lazismu DIY",
          description: "Membuat website pengajuan proposal di Lazismu DIY dengan saya sebagai Frontend Web Developer menggunakan Laravel",
          imgUrl: ImgProject2,
        },
        {
          title: "Klasifikasi Gambar Identifikasi Kelayakan Botol Plastik",
          description: "Membuat model AI untuk klasifikasi gambar kelayakan botol plastik",
          imgUrl: ImgProject3,
        },
      ];
    
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Berikut Project saya selama masa perkuliahan mulai dari web developer dan modeling AI</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }