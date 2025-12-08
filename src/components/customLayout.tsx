import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from '../pages/home';
import AboutMePage from '../pages/aboutme';

import MenuRow from './menuRow';

import '../pages/pages.scss';
import { AnimatePresence } from 'framer-motion';

import { PageTransitionExitOnlyWrapper } from '../pages/pageTransitionWrapper';
import PortfolioPage from '../pages/portfolio';

const CustomLayout = () => {
  const location = useLocation();
  return (
    <div id="rootpage">
      <div id="responsive-header-row">
        <MenuRow />
          <motion.div
            style={{
              height: 1,
              width: "100%",
              background: "#e3e3e3",
              transformOrigin: "50% 50%",
              position: "absolute",
              bottom: "0"
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
      </div>
      <div id="rootpage-content">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransitionExitOnlyWrapper keyName={location.pathname}>
                  <HomePage />
                </PageTransitionExitOnlyWrapper>
              }
            />
            <Route
              path="aboutme"
              element={
                <PageTransitionExitOnlyWrapper keyName={location.pathname}>
                  <AboutMePage />
                </PageTransitionExitOnlyWrapper>
              }
            />
            <Route
              path="portfolio"
              element={
                <PageTransitionExitOnlyWrapper keyName={location.pathname}>
                  <PortfolioPage />
                </PageTransitionExitOnlyWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomLayout;
