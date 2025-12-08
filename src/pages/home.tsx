import { motion } from 'motion/react';

import { Col } from 'react-bootstrap';

import { riseUpTextVariant, leftToRightTextVariant, rightToLeftTextVariant } from '../assets/animations/motionVariants';

import './pages.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="name-row">
      <motion.div 
        className="name"
        variants={riseUpTextVariant}
        initial="initial"
        animate="animate"
        layout="position"
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
          duration: 2,
          delay: 0.2,
        }}>
          ALEXA
        </motion.div>
      </div>
      <div className="name-row">
        <motion.div 
          className="name"
          variants={riseUpTextVariant}
          initial="initial"
          animate="animate"
          layout="position"
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 30,
            duration: 2,
            delay: 0.2,
          }}>
            JAVELLANA
          </motion.div>
      </div>

      <div className="homepage-bottom">
        <Col>
          <motion.div 
          variants={leftToRightTextVariant}
          initial="initial"
          animate="animate"
          layout="position"
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 30,
            duration: 2,
            delay: 0.2,
          }}>ajavellana123@gmail.com</motion.div></Col>
        <Col className='blurb'>
          <motion.div 
            variants={rightToLeftTextVariant}
            initial="initial"
            animate="animate"
            layout="position"
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 30,
              duration: 2,
              delay: 0.2,
            }}>
              Hello! I`m a Software Engineer and Digital Consultant based out of 
              New York. Or, I might be in Los Angeles and Tokyo! I`ve worked for 
              Amazon, Disney, IBM and more ー Let`s connect!   
            </motion.div>
        </Col>
      </div>
    </div>
  );
};

export default HomePage;
