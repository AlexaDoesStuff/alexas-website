import { useState } from 'react';
import './components.scss';

type Props = {
  buttonCTA: string;
  icon?: string;
  title?: string;
};

function PortfolioItem({ buttonCTA, icon, title }: Props) {
  const [showWindow, setShowWindow] = useState(false);
  return (
    <>
      <div
        className={
          showWindow ? 'portfolio-window-bg show' : 'portfolio-window-bg hide'
        }
      ></div>
      <div className="portfolio-icon-container">
        <img className="portfolio-icon" src={icon} />
        <button
          className="portfolio-button"
          onClick={() => setShowWindow(!showWindow)}
        >
          <span style={{ transform: 'scaleY(1.6)', display: 'inline-block' }}>
            {buttonCTA}
          </span>
        </button>
      </div>

      <div
        className={
          showWindow
            ? 'portfolio-item-window-container'
            : 'portfolio-item-window-container hide'
        }
      >
        <div
          className={
            showWindow ? 'portfolio-item-window' : 'portfolio-item-window hide'
          }
        >
          <div id="portfolio-window-topbar">
            {title ? title : "Alexa Javellana's example of work are as follows"}
            <button
              id="portfolio-window-close"
              onClick={() => setShowWindow(false)}
            >
              [ X ]
            </button>
          </div>

          <div id="portfolio-window-folder">
            <div id="folder-container">
              <button id="folder-tab-button">About the Work</button>
              <div id="folder-content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
