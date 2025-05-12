import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PulseIcon from '../assets/animations/pulseIcon';

import HomeIcon from '../assets/images/homeIcon.svg';
import WorkIcon from '../assets/images/work.svg';
import MeIcon from '../assets/images/running.svg';

import { useLanguage } from '../contexts/language';

import './components.scss';
import '../pages/pages.scss';

import { cn, Switch } from '@heroui/react';

const MenuRow = () => {
  const { toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  return (
    <div className="menu-row">
      <div className="icon-row">
        <a onClick={() => navigate('/')}>
          <PulseIcon src={HomeIcon} />
        </a>
        <a onClick={() => navigate('/aboutme')}>
          <PulseIcon src={MeIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexa-j-2590ba96/"
          target="__blank"
          style={{ width: '25px' }}
        >
          <PulseIcon src={WorkIcon} />
        </a>
      </div>
      <motion.div
        id="languageToggle"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Switch
          color="default"
          onChange={toggleLanguage}
          endContent={<div className="languageToggle_label"> EN </div>}
          size="lg"
          startContent={<div className="languageToggle_label"> JP </div>}
          classNames={{
            wrapper: cn('w-[60px] transition-colors', 'bg-green-500'),
            startContent: 'text-sm text-white font-bold ',
            endContent: 'text-sm text-white font-bold',
            thumb: [
              'w-5 h-5',
              'transition-transform duration-300',
              'group-data-[selected=true]:translate-x-2',
              'group-data-[pressed=true]:w-6',
            ],
          }}
        />
      </motion.div>
    </div>
  );
};

export default MenuRow;
