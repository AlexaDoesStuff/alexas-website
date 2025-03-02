import { Row } from "react-bootstrap";

import PulseIcon from "../assets/animations/pulseIcon";

import HomeIcon from "../assets/images/homeIcon.svg";
import MeIcon from "../assets/images/meIcon.svg";
import WorkIcon from "../assets/images/workIcon.svg";

import jindaiji from "../assets/images/jindaiji.png";

import "./pages.scss";
import { motion } from "motion/react";

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

        <Row className="blurb-row">
          <motion.div className="contents p-0 first">
            Hello. I'm Alexa, a <strong className="keyword">Front End Engineer</strong> with over 
            <strong className="keyword"> 4 years of experience</strong>. A lover of all things visually 
            beautiful and harmoniously effective. Translates into all facets of my life, and definitely 
            helps in my career, as I become a better engineer.
          </motion.div>

          <div className="gutter"/>

          <motion.div className="contents p-0 second">
            Currently, I’m working for <strong className="keyword">Amazon, Prime Video</strong> as a Front End Software Engineer. Always 
            open to new opportunities and connection, aiming to build for the future.         
          </motion.div>
        </Row>

        <motion.div
          initial={{ opacity: 0, y: "-50px" }} 
          animate={{ opacity: 1, y: "0px" }} 
          transition={{ duration: 2, ease: "easeOut" }} 
          className="name-row"
        > 
          <Row className="title-name">Alexa</Row>
          <Row className="title-name last-name">Javellana</Row>
        </motion.div>
      

        <motion.img
          id="jindaiji"
          src={jindaiji}
          initial={{ opacity: 0, y: "-40px" }}
          animate={{ opacity: .7, y: "0px" }} 
          transition={{ duration: 1.8, ease: "easeOut" }} 
        />
    </div>
  )
}

export default HomePage;