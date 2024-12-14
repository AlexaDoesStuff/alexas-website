import { Container, Row, Col } from "react-bootstrap";

import HomeIcon from "../assets/images/homeIcon.svg";
import MeIcon from "../assets/images/meIcon.svg";
import WorkIcon from "../assets/images/workIcon.svg";

import "./pages.scss";

const HomePage = () => {
  return (
    <Container id="homepage">
        <Row className="icon-row">
          <img src={HomeIcon} className="icon"/>
          <img src={MeIcon} className="icon"/>
          <img src={WorkIcon} className="icon"/>
        </Row>
        
        {/* Gutter */}
        <div className="p-3"/>

        <Row className="d-flex blurb">
          <Col className="col-4">
            Hello. I'm Alexa, a <strong>Front End Engineer</strong> with over <strong>5 years of experience</strong>. 
            As a self-proclaimed  computer whiz, I’m becoming a seasoned web guru specializing 
            in full stack and frontend, continuously  developing incredible things for incredible causes.          
          </Col>

          {/* Gutter */}
          <div className="p-4"/>

          <Col className="col-4">
            Currently, I’m working for <strong>Amazon, Prime Video</strong> as a Front End Software Engineer. Always 
            open to new opportunities and connection, aiming to build for the future.         
          </Col>

        </Row>
        <Row>
          <div className="p-5"/>
        </Row>
    </Container>
  )
}

export default HomePage;