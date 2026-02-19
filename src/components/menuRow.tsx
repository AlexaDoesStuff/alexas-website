import { useNavigate } from 'react-router-dom';
import PulseIcon from '../assets/animations/pulseIcon';

import HomeIcon from '../assets/images/homeIcon.svg';
import LinkedIn from '../assets/images/linkedin.svg';
import MeIcon from '../assets/images/running.svg';

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
        <a onClick={() => navigate('/aboutmealt')}>
          <PulseIcon src={MeIcon} />
        </a>
        {/* <a onClick={() => navigate('/')}>
          <PulseIcon src={WorkIcon} />
        </a> */}
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
