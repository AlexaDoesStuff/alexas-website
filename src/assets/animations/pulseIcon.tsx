import { motion } from "motion/react"

interface Props {
    src: string
}

const variants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    hover: { scale: 1.3 },
  };

const PulseIcon: React.FC<Props> = ({src}) => (
    
    <motion.img
        src={src}
        className="icon"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 10 },
        }}
        style={{
            border: "none",
            outline: "none",
        }}
    />
)

    
export default PulseIcon;