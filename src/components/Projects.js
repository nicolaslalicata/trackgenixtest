import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/accesibility.png";
import projImg2 from "../assets/img/testplan.jpg";
import projImg3 from "../assets/img/testcases.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href="https://docs.google.com/document/d/1YHndy-PSShydxAeZClbWXcXsmNB7C7XV/edit"
          target="_blank"
          rel="noreferrer"
        >
          Test Plan
        </a>
      ),
      description: "Total plan for application testing",
      imgUrl: projImg2,
    },
    {
      title: (
        <a
          href="https://docs.google.com/document/d/195ZgW8USeDULxYZOzjyI4VweY2tXMjJfNYw43yP3QbA"
          target="_blank"
          rel="noreferrer"
        >
          Accesibility Report
        </a>
      ),
      description: "Google Lighthouse, Contrast Checker and Contrast Finder",
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          href="https://docs.google.com/spreadsheets/d/1eLnqOQF886GQkP363mzfNakipLPHz6VTivJK6SXPf04"
          target="_blank"
          rel="noreferrer"
        >
          Test Cases
        </a>
      ),
      description: "It is documented what is to be tested.",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
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
                  <h2>Tests and Documentation</h2>
                  <p>
                    In this section we will find the different manual tests that
                    were applied to the application.{" "}
                    <li>
                      The <b>accessibility tests</b> we make sure that our site
                      complies with the standards of the WCAG (Web Content
                      Accessibility Guidelines).
                    </li>
                    <li>
                      The <b>Test Plan</b> is a document that allows us to know
                      how, with what tools and how long we are going to test the
                      application.
                    </li>{" "}
                    <li>
                      The <b>Test Cases</b> are the design of what is going to
                      be tested in the application (ex: login, signup, close
                      modal).
                    </li>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Manual Testing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Automation Testing
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
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
