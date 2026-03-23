import './pages.scss';
import '../components/components.scss';

import portfolioVideo from '../assets/videos/portfoliovideo_warped.mov';
import { StylizedMediaPlayer } from '../components/stylizedMediaPlayer';

import portfolioPDF from '../assets/content/PDF Portfolio Alexa J.pdf';

const AboutMeAlternativePage = () => {
  return (
    <>
      <div className={`aboutme-page`} key={Date.now()}>
        <div id="contents">
          <div className="secondary-title">
            <a href={portfolioPDF} download={'AlexaJ_Portfolio.pdf'}>
              [PORTFOLIO INCOMING]
            </a>
          </div>
          <div className="media alt">
            <div></div>
            <div></div>
            <StylizedMediaPlayer video={portfolioVideo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeAlternativePage;
