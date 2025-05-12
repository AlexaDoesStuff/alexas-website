import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/language';
import { roadmapContent } from '../assets/content/roadmapContent';

import './components.scss';
import { AnimatePresence, motion } from 'framer-motion';

type SubwayStopsProps = {
  svgId: string;
};

const SubwayStops = ({ svgId }: SubwayStopsProps) => {
  const [subwayStopPositions, setSubwayStopPositions] = useState<
    { x: number; y: number }[]
  >([]);
  const [isAnimated, setIsAnimated] = useState(false);

  const [showStopNumber, setShowStopNumber] = useState<number | null>(null);

  const { language } = useLanguage();

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
            onMouseEnter={() => setShowStopNumber(i)}
          >
            <AnimatePresence>
              {showStopNumber === i && (
                <motion.div
                  key={`popover-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <div className="stop-popover">
                    {roadmapContent[language].stopContent[i]}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default SubwayStops;
