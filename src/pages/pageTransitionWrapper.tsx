import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageExitVariant } from '../assets/animations/motionVariants';

type PageTransitionWrapperProps = {
  children: ReactNode;
  keyName: string;
};

export const PageTransitionExitOnlyWrapper: React.FC<
  PageTransitionWrapperProps
> = ({ children, keyName }) => (
  <motion.div
    key={keyName}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit="exit"
    variants={pageExitVariant}
    className="page-transition-wrapper"
  >
    {children}
  </motion.div>
);
