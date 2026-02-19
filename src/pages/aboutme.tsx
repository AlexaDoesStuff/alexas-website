import './pages.scss';
import '../components/components.scss';
import {
  MotionVariantAnimation,
  VariantType,
} from '../assets/animations/motionVariants';

import portfolioVideo from '../assets/videos/portfoliovideo.mov';
import { StylizedMediaPlayer } from '../components/stylizedMediaPlayer';

const AboutMePage = () => {
  return (
    <>
      <div className={`aboutme-page`} key={Date.now()}>
        <div id="contents">
          <div className="contents-left"></div>
          <div className="contents-right">
            <div className="title">
              <div className="about-display">
                <MotionVariantAnimation variantType={VariantType.LEFT_RIGHT}>
                  <div>THIS IS A SELF TITLED</div>
                </MotionVariantAnimation>
              </div>
              <div className="about-display">
                <MotionVariantAnimation variantType={VariantType.RIGHT_LEFT}>
                  <div
                    style={{ transformOrigin: 'right center', maxWidth: '72%' }}
                  >
                    DIGITAL AUTOBIOGRAPHY
                  </div>
                </MotionVariantAnimation>
              </div>
            </div>

            <div className="media">
              <StylizedMediaPlayer video={portfolioVideo} />
            </div>

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

export default AboutMePage;
