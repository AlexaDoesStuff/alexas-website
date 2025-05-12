import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';

import { Col } from 'react-bootstrap';

import jindaiji from '../assets/images/jindaiji.png';
import arrowDown from '../assets/images/arrow_down.png';

import './pages.scss';
import { homepageContent } from '../assets/content/homepageContent';
import { useLanguage } from '../contexts/language';

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const HomePage = () => {
  const { language } = useLanguage();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div className="homepage">
      <motion.div
        initial={{ opacity: 0, y: '-45px' }}
        animate={ready ? { opacity: 1, y: '0px' } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="name-row"
      >
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 30,
            duration: 3,
            delay: 0.3,
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
            type: 'spring',
            stiffness: 100,
            damping: 30,
            duration: 3,
            delay: 0.5,
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
          initial={{ opacity: 0, y: '-35px' }}
          animate={ready ? { opacity: 0.85, y: '0px' } : {}}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: '-30px' }}
            animate={ready ? { opacity: 1, y: '0px' } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="homepage-contents"
            exit={{ opacity: 0, y: '30px' }}
            dangerouslySetInnerHTML={{
              __html: homepageContent[language].intro[0],
            }}
          />
        </AnimatePresence>

        <div className="p-3" />

        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: '-30px' }}
            animate={ready ? { opacity: 1, y: '0px' } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            exit={{ opacity: 0, y: '30px' }}
            className="homepage-contents"
            dangerouslySetInnerHTML={{
              __html: homepageContent[language].intro[1],
            }}
          />
        </AnimatePresence>
      </Col>

      <motion.img
        id="arrow-down"
        src={arrowDown}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      />
    </div>
  );
};

export default HomePage;
