import './pages.scss';
import '../components/components.scss';

const AboutMePage = () => {
  return (
    <>
      <div className={`aboutme-page`} key={Date.now()}>
        <div id="contents">
          <span className="about-display">
            THIS IS A SELF-TITLED
          </span>
          <span>
            DIGITAL AUTOBIGRAPHY
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
