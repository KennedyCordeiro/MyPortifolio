import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"
import img5 from "../assets/img/img5.jpg"

export const Projects = () => {
  const imgs = [img1 , img2, img3, img4, img5]
  return (
    <section className="project reveal" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Um pouco sobre meus projetos atuais </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="kentech">Kentech Technology</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="fitbank">Front-end at Fitbank</Nav.Link>
                      </Nav.Item>

                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Carousel>
                        <div>
                          {imgs.map((imgs => (
                            <div className="item-carousel">
                              <img src = {Imgs} alt = {description}/>
                            </div>
                          )))
                          }
                       </div>
                        <div>
                          <img src={img1} />
                          <p className="legend">Placas de vídeo</p>
                        </div>
                        <div>
                          <img src={img2} />
                          <p className="legend">Legend 2</p>
                        </div>
                        <div>
                          <img src="assets/3.jpeg" />
                          <p className="legend">Legend 3</p>
                        </div>
                      </Carousel>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
