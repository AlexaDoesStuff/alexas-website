import './pages.scss';
import '../components/components.scss';

import portfolioVideo from '../assets/videos/portfoliovideo_warped.mov';
import { StylizedMediaPlayer } from '../components/stylizedMediaPlayer';

import {
  MotionVariantAnimation,
  VariantType,
} from '../assets/animations/motionVariants';

const AboutMeAlternativePage = () => {
  return (
    <>
      <div className={`aboutme-page`} key={Date.now()}>
        <div id="contents">
          <div className="media alt">
            <div></div>
            <div></div>
            <StylizedMediaPlayer video={portfolioVideo} />
            <div className="secondary-title">
              <MotionVariantAnimation variantType={VariantType.RISE_UP}>
                <div>THINGS TAKE TIME</div>
              </MotionVariantAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeAlternativePage;
