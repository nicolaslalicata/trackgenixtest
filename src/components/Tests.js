import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/accesibility.png";
import projImg2 from "../assets/img/testplan.jpg";
import projImg3 from "../assets/img/testcases.png";
import projImg4 from "../assets/img/automation1.png";
import projImg5 from "../assets/img/accesibilityautomation.png";
import projImg6 from "../assets/img/automation2.png";
import projImg7 from "../assets/img/automation3.png";
import projImg8 from "../assets/img/manual1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Tests = () => {
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
      description: "",
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
      description: "",
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          href="https://docs.google.com/document/d/1pN-hdVQbon0Nco7grVPavXcf69QjvcMFvkEbxqv4aRA"
          target="_blank"
          rel="noreferrer"
        >
          Automation Strategy
        </a>
      ),
      description: "",
      imgUrl: projImg8,
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
      description: "",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: (
        <a href="https://youtu.be/_dEjFGH_oRk" target="_blank" rel="noreferrer">
          Automation in Home, Login and Sign Up
        </a>
      ),
      description:
        "webdriverIo was used in order to test the first part of app",
      imgUrl: projImg4,
    },
    {
      title: (
        <a href="https://youtu.be/FIzOeczavWY" target="_blank" rel="noreferrer">
          Automation Add/Edit/Delete"
        </a>
      ),
      description:
        "It was tested that users can create, edit and delete tasks from the Timesheet and Task entities",
      imgUrl: projImg6,
    },

    {
      title: (
        <a
          href="https://drive.google.com/drive/folders/1qnE2XDze9W5biT3BoI2ZYri6pTep2sDR?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Automated Accesibility Report
        </a>
      ),
      description: "This reports was created with the Google Lighthouse tool.",
      imgUrl: projImg5,
    },
    {
      title: (
        <a href="https://youtu.be/SfeHOPssL_Y" target="_blank" rel="noreferrer">
          Collection Postman
        </a>
      ),
      description:
        "This reports was created with the Postman for test Backend.",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="tests">
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
