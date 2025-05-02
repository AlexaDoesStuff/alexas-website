import HomePage from '../pages/home';
import MenuRow from './menuRow';

import '../pages/pages.scss';

const CustomLayout = () => {
  return (
    <div id="rootpage">
      <div id="rootpage-content">
        <MenuRow />
        <div id="firstpage">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default CustomLayout;
