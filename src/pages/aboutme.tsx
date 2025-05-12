import Roadmap from '../assets/images/subway_path.svg?react';
import SubwayStops from '../components/subwayStops';

import './pages.scss';
import '../components/components.scss';
import RoadmapInstructions from '../components/roadmapInstructions';

const AboutMePage = () => {
  return (
    <>
      <RoadmapInstructions />
      <div className={`roadmap-page`} key={Date.now()}>
        <div id="roadmap">
          <Roadmap id="roadmap-svg" />
          <SubwayStops svgId="roadmap-svg" />
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
