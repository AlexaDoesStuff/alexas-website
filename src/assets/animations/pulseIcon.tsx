import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import './animations.scss';

type Props = {
  src: string;
};

const variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const PulseIcon: React.FC<Props> = ({ src }) => {
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    if (hasHover) {
      setTimeout(() => {
        setHasHover(false);
      }, 500);
    }
  }, [hasHover]);

  return (
    <motion.div
      className="icon-wrapper"
      variants={variants}
      initial="initial"
      animate="animate"
      layout="position"
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 1.5,
        delay: 0.2,
      }}
      style={{
        border: 'none',
        outline: 'none',
      }}
    >
      <div>
        <img
          src={src}
          className={`icon ${hasHover ? `hover` : ``}`}
          onMouseEnter={() => setHasHover(true)}
          style={{
            transform: `translateY(${0})`,
          }}
        />
      </div>
      <div>
        <img
          src={src}
          className={`icon ${hasHover ? `hover` : ``}`}
          style={{
            transform: `translateY(${45})`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default PulseIcon;
