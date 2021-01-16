import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = () => {
  return (
    <Fragment>
      <div className="background"></div>
      <div className="menu-options">
        <Link to="start" className="option">Play</Link>
      </div>
    </Fragment>
  )
}

export default MainMenu;