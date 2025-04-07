import { motion } from "motion/react"

interface Props {
    src: string
}

const variants = {
    initial: { y: 50, opacity: 0 }, // Start 50px below its final position
    animate: { y: 0, opacity: 1 },
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
            type: "spring", 
            stiffness: 100,
            damping: 30,
            duration: 1.5, 
            delay: .2
        }}
        style={{
            border: "none",
            outline: "none",
        }}
    />
)

export default PulseIcon;