import Roadmap from '../assets/images/subway_path.svg?react';

import "./pages.scss";

const RoadmapPage = () => {
  return (
    <div className={`roadmap-page`}>
      <Roadmap className="roadmap-svg" />
    </div>
  )
}

export default RoadmapPage;