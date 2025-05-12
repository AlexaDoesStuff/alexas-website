import { useEffect, useState } from 'react';
import './components.scss';
import { useLanguage } from '../contexts/language';
import { roadmapContent } from '../assets/content/roadmapContent';

const RoadmapInstructions = () => {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const { language } = useLanguage();

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10);
    const hideTimer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => setVisible(false), 1000);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;
  return (
    <div id="instructions" className={fadingOut ? 'hide' : 'show'}>
      {roadmapContent[language].instructions[0]}
    </div>
  );
};

export default RoadmapInstructions;
