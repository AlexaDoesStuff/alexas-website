import { useNavigate } from 'react-router-dom';
import PulseIcon from '../assets/animations/pulseIcon';

import HomeIcon from '../assets/images/homeIcon.svg';
import LinkedIn from '../assets/images/linkedin.svg';
import MeIcon from '../assets/images/running.svg';
import PaperIcon from '../assets/images/paperIcon.svg';

import portfolioPDF from '../assets/content/New Portfolio_ Alexa Javellana.pdf';

// import { useLanguage } from '../contexts/language';

import './components.scss';
import '../pages/pages.scss';

// import { cn } from '@heroui/react';
// import { Switch } from '@heroui/react';

const MenuRow = () => {
  // const { toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  return (
    <div className="menu-row">
      <div className="icon-row">
        <a onClick={() => navigate('/')}>
          <PulseIcon src={HomeIcon} />
        </a>
        <a onClick={() => navigate('/internal-portfolio')}>
          <PulseIcon src={MeIcon} />
        </a>
        <a href={portfolioPDF} download={'AlexaJ_Portfolio.pdf'}>
          <PulseIcon src={PaperIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexa-j-2590ba96/"
          target="__blank"
        >
          <PulseIcon src={LinkedIn} />
        </a>
      </div>
    </div>
  );
};

export default MenuRow;
