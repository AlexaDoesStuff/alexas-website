import { motion } from 'motion/react';

import {
  leftToRightTextVariant,
  rightToLeftTextVariant,
  VariantType,
} from '../assets/animations/motionVariants';

import { MotionVariantAnimation } from '../assets/animations/motionVariants';

import './pages.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="name-row">
        <MotionVariantAnimation
          classString="name"
          variantType={VariantType.RISE_UP}
        >
          ALEXA
        </MotionVariantAnimation>
      </div>
      <div className="name-row">
        <MotionVariantAnimation
          classString="name"
          variantType={VariantType.RISE_UP}
        >
          JAVELLANA
        </MotionVariantAnimation>
      </div>

      <div className="homepage-bottom">
        <div>
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
            }}
          >
            ajavellana123@gmail.com
          </motion.div>
        </div>
        <div className="blurb">
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
            }}
          >
            {`Hello! I'm a Front End Engineer and Digital Design and Development Consultant based out of 
              New York. I travel often and speak English and Japanese, with ability to work JST and PST timezones. 
              An expert on bringing ideas to life in the digital world - Let's connect!`}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
