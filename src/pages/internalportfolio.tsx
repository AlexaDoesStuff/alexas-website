import './pages.scss';
import '../components/components.scss';

import portfolioVideo from '../assets/videos/portfoliovideo_warped.mov';
import { StylizedMediaPlayer } from '../components/stylizedMediaPlayer';

import portfolioPDF from '../assets/content/A4 - Alexa J Portfolio.pdf';
import PortfolioItem from '../components/portfolioItem';

import amazonIcon from '../assets/images/amazon prime logo.png';
import tokyoIcon from '../assets/images/tokyo_icon.png';
import ibmIcon from '../assets/images/ibm_icon.png';

const PortfolioInternalPage = () => {
  return (
    <>
      <div className={`aboutme-page`} key={Date.now()}>
        <div id="contents">
          <div id="portfolio-contents">
            <div className="portfolio-row">
              <PortfolioItem buttonCTA="AMAZON PRIME VIDEO" icon={amazonIcon} />
              <PortfolioItem buttonCTA="TOKYO CONSULTING" icon={tokyoIcon} />
              <PortfolioItem buttonCTA="WORK@IBM" icon={ibmIcon} />
            </div>
            <div className="portfolio-row">
              <PortfolioItem buttonCTA="WORK@DISNEY" />
              <PortfolioItem buttonCTA="NON-PROFIT" />
              <PortfolioItem buttonCTA="DESIGN+ECOMMERCE" />
            </div>
          </div>
          <div className="media alt">
            <StylizedMediaPlayer video={portfolioVideo} />
          </div>
        </div>
        <div id="bottom-title">
          <a href={portfolioPDF} download={'AlexaJ_Portfolio.pdf'}>
            *click buttons above to learn; click here to download
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioInternalPage;
