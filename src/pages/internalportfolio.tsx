import './pages.scss';
import '../components/components.scss';

import portfolioVideo from '../assets/videos/portfoliovideo.mp4';
import { StylizedMediaPlayer } from '../components/stylizedMediaPlayer';

import resume from '../../public/content/Alexa Javellana Resume 2026.pdf';
import PortfolioItem from '../components/portfolioItem';

import amazonIcon from '../assets/images/amazon prime logo.png';
import tokyoIcon from '../assets/images/tokyo_icon.png';
import ibmIcon from '../assets/images/ibm_icon.png';
import marvelIcon from '../assets/images/marvel.png';
import jsIcon from '../assets/images/jsociety.png';
import commerceIcon from '../assets/images/ecommerce.png';

import { windowContentData } from '../../public/content/windowContent';

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
                data={windowContentData.amazon}
              />
              <PortfolioItem
                buttonCTA="TOKYO CONSULTING"
                icon={tokyoIcon}
                title="Working in A COVID Time: Tokyo Edition"
                data={windowContentData.liferay}
              />
              <PortfolioItem
                buttonCTA="WORK@IBM"
                icon={ibmIcon}
                title="Beep Boop at IBM"
                data={windowContentData.ibm}
              />
            </div>
            <div className="portfolio-row">
              <PortfolioItem
                buttonCTA="WORK@DISNEY"
                icon={marvelIcon}
                title="Avengers Assemble: Front End at Marvel"
                data={windowContentData.marvel}
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
          <a href={resume} download={'Alexa Javellana Resume 2026.pdf'}>
            *click here to download my latest resume
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioInternalPage;
