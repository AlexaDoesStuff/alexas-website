import { Row, Col } from "react-bootstrap";

import PulseIcon from "../assets/animations/pulseIcon";

import HomeIcon from "../assets/images/homeIcon.svg";
import MeIcon from "../assets/images/meIcon.svg";
import WorkIcon from "../assets/images/workIcon.svg";

import jindaiji from "../assets/images/Jindaiji_FULL.png";

import "./pages.scss";

const HomePage = () => {
  return (
    <div className={`homepage`}>
        <Row className="icon-row">
          <PulseIcon src={HomeIcon} />
          <PulseIcon src={MeIcon} />
          <a href="https://www.linkedin.com/in/alexa-j-2590ba96/" target="__blank">
            <PulseIcon src={WorkIcon} />
          </a>
        </Row>
        
        {/* Gutter */}
        <div className="p-4"/>

        <Row className="d-flex blurb">
          <Col className="col-4 p-0">
            Hello. I'm Alexa, a <strong>Front End Engineer</strong> with over <strong>4 years of experience</strong>. 
            As a self-proclaimed  computer whiz, I’m becoming a seasoned web guru specializing 
            in full stack and frontend, continuously  developing incredible things for incredible causes.          
          </Col>

          {/* Gutter */}
          <div className="p-5"/>

          <Col className="col-4 p-0">
            Currently, I’m working for <strong>Amazon, Prime Video</strong> as a Front End Software Engineer. Always 
            open to new opportunities and connection, aiming to build for the future.         
          </Col>
        </Row>

        <div className="gutter"/>

        <Row className="slideshow">
          <Col>
            <Row className="title-name">Alexa</Row>
            <Row className="title-name last-name">Javellana</Row>
          </Col>
          <Col>
            <Row className="slideshow subtitle">
              {/* Jindaiji Temple, 2020 */}
            </Row>
            <img src={jindaiji} id="jindaiji"/>
          </Col>
        </Row>
    </div>
  )
}

export default HomePage;