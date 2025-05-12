import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { pageExitVariant } from '../assets/animations/motionVariants';
import { useLocation } from 'react-router-dom';

type PageTransitionWrapperProps = {
  children: ReactNode;
  keyName: string;
};

export const PageTransitionExitOnlyWrapper: React.FC<
  PageTransitionWrapperProps
> = ({ children, keyName }) => {
  const [wrapperClass, setWrapperClass] = useState('page-transition-wrapper');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/aboutme') {
      setWrapperClass('page-transition-wrapper has-roadmap');
    }
  }, [location.pathname]);

  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit="exit"
      variants={pageExitVariant}
      className={wrapperClass}
    >
      {children}
    </motion.div>
  );
};
