import { Col, Row } from "react-bootstrap";

import PulseIcon from "../assets/animations/pulseIcon";

import HomeIcon from "../assets/images/homeIcon.svg";
import MeIcon from "../assets/images/meIcon.svg";
import WorkIcon from "../assets/images/workIcon.svg";

import jindaiji from "../assets/images/jindaiji.png";
import arrowDown from "../assets/images/arrow_down.png";

import "./pages.scss";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const variants = {
  initial: { y: 100, opacity: 0 }, 
  animate: { y: 0, opacity: 1 },
};

const HomePage = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);
  
  return (
    <div className={`homepage`}>
        <Row className="icon-row">
          <PulseIcon src={HomeIcon} />
          <PulseIcon src={MeIcon} />
          <a href="https://www.linkedin.com/in/alexa-j-2590ba96/" target="__blank">
            <PulseIcon src={WorkIcon} />
          </a>
        </Row>
        
        <div className="p-4"/>

        <motion.div
          initial={{ opacity: 0, y: "-45px" }} 
          animate={ready ? { opacity: 1, y: "0px" } : {}}
          transition={{ duration: 1, ease: "easeOut" }} 
          className="name-row"
        > 
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{
                type: "spring", 
                stiffness: 100,
                damping: 30,
                duration: 3, 
                delay: .3
            }}
            className="title-name"
          > 
            Alexa
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{
                type: "spring", 
                stiffness: 100,
                damping: 30,
                duration: 3, 
                delay: .5
            }}
            className="title-name last-name"
          > 
            Javellana
          </motion.div>
        </motion.div>

        <Col className="blurb-col">
          <motion.img
            id="jindaiji"
            src={jindaiji}
            initial={{ opacity: 0, y: "-35px" }}
            animate={ready ? { opacity: .85, y: "0px" } : {}}
            transition={{ duration: 1.3, ease: "easeOut" }} 
          />

          <motion.div 
            initial={{ opacity: 0, y: "-30px" }} 
            animate={ready ? { opacity: 1, y: "0px" } : {}}
            transition={{ duration: .8, ease: "easeOut" }} 
            className="contents p-0 first">
            Hello. I'm Alexa, a <strong className="keyword">Front End Engineer</strong> with over 
            <strong className="keyword"> 5 years of experience</strong>. A lover of all things visually 
            beautiful and harmoniously effective. Translates into all facets of my life, and definitely 
            helps in my career, as I become a better engineer.
          </motion.div>

          <div className="p-4"/>

          <motion.div 
            initial={{ opacity: 0, y: "-30px" }} 
            animate={ready ? { opacity: 1, y: "0px" } : {}} 
            transition={{ duration: .8, ease: "easeOut" }} 
            className="contents p-0 second">
            Currently, I’m working for <strong className="keyword">Amazon, Prime Video</strong> as a Front End Software Engineer. Always 
            open to new opportunities and connection, aiming to build for the future.         
          </motion.div>
        </Col>


        <motion.img
          id="arrow-down"
          src={arrowDown}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{delay: .8}}
        />
    </div>
  )
}

export default HomePage;