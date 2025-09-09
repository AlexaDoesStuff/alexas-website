import { Routes, Route, useLocation } from 'react-router-dom';
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
      <div id="rootpage-content">
        <MenuRow />
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
