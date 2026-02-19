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
            {`Hello! I'm a Software Engineer and Digital Consultant based out of 
              New York. I travel often and speak Japanese, with ability to work JST and PST timezones. 
              I've worked for Amazon, Disney, IBM and more ー Let's connect. `}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
