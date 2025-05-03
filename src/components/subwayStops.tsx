import { useEffect, useState } from 'react';

import './components.scss';

type SubwayStopsProps = {
  svgId: string;
};

const SubwayStops = ({ svgId }: SubwayStopsProps) => {
  const [subwayStopPositions, setSubwayStopPositions] = useState<
    { x: number; y: number }[]
  >([]);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const svg = document.getElementById(svgId) as SVGSVGElement | null;
    if (!svg) return;

    const path = svg.querySelector('path') as SVGPathElement | null;
    if (!path) return;

    const totalLength = path.getTotalLength();
    const numberOfDots = 8;
    const segment = totalLength / (numberOfDots - 1);

    const points = Array.from({ length: numberOfDots }, (_, i) =>
      path.getPointAtLength(i * segment)
    );

    setSubwayStopPositions(points);
    setIsAnimated(true);
  }, [svgId]);

  return (
    <div id="roadmap-stops">
      {subwayStopPositions.map((point, i) => {
        return (
          <div
            key={i}
            className={`roadmap-stop delayed-${i} ${isAnimated ? 'is-animated' : ''}`}
            style={{
              left: point.x - 12,
              top: point.y - 12,
            }}
          />
        );
      })}
    </div>
  );
};

export default SubwayStops;
