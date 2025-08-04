import { motion } from 'motion/react';

type Props = {
  src: string;
  onClick?: () => void;
};

const variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const PulseIcon: React.FC<Props> = ({ src, onClick }) => (
  <motion.img
    src={src}
    className="icon"
    variants={variants}
    initial="initial"
    animate="animate"
    layout="position"
    onClick={onClick}
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
  />
);

export default PulseIcon;
