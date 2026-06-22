import './pages.scss';
import '../components/components.scss';

import portfolioVideo from '../assets/videos/portfoliovideo_warped.mov';
import { StylizedMediaPlayer } from '../components/stylizedMediaPlayer';

import portfolioPDF from '../assets/content/New Portfolio_ Alexa Javellana.pdf';
import PortfolioItem from '../components/portfolioItem';

import amazonIcon from '../assets/images/amazon prime logo.png';
import tokyoIcon from '../assets/images/tokyo_icon.png';
import ibmIcon from '../assets/images/ibm_icon.png';
import marvelIcon from '../assets/images/marvel.png';
import jsIcon from '../assets/images/jsociety.png';
import commerceIcon from '../assets/images/ecommerce.png';

const PortfolioInternalPage = () => {
  return (
    <>
      <div className={`aboutme-page`} key={Date.now()}>
        <div id="contents">
          <div id="portfolio-contents">
            <div className="portfolio-row">
              <PortfolioItem
                buttonCTA="AMAZON PRIME VIDEO"
                icon={amazonIcon}
                title="Four Years@Amazon Prime Video"
              />
              <PortfolioItem
                buttonCTA="TOKYO CONSULTING"
                icon={tokyoIcon}
                title="Working in A COVID Time: Tokyo Edition"
              />
              <PortfolioItem
                buttonCTA="WORK@IBM"
                icon={ibmIcon}
                title="Beep Boop at IBM"
              />
            </div>
            <div className="portfolio-row">
              <PortfolioItem
                buttonCTA="WORK@DISNEY"
                icon={marvelIcon}
                title="Avengers Assemble: Front End at Marvel"
              />
              <PortfolioItem
                buttonCTA="NON-PROFIT"
                icon={jsIcon}
                title="Seeking Cultural Outlet's @ Japan Society"
              />
              <PortfolioItem
                buttonCTA="DESIGN+ECOMMERCE"
                icon={commerceIcon}
                title="Buying and Selling: Personal Growth Group"
              />
            </div>
          </div>
          <div className="media alt">
            <StylizedMediaPlayer video={portfolioVideo} />
          </div>
        </div>
        <div id="bottom-title">
          <a href={portfolioPDF} download={'AlexaJ_Portfolio.pdf'}>
            *click here to download my full portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioInternalPage;
