import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faComments, faClipboardList, faHouse, faBroom, faWrench } from '@fortawesome/free-solid-svg-icons'; 

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
          <h1>Task Manager</h1>
      </a>
      <a className="menu-item" href="/">
        <FontAwesomeIcon icon={faHouse} className="menu-item-icon" />
        Dashboard
      </a>
      <a className="menu-item" src="Housekeeping.js">
        <FontAwesomeIcon icon={faBroom} className="menu-item-icon" />
        Housekeeping
      </a>
      <a className="menu-item" href="/maintenance">
        <FontAwesomeIcon icon={faWrench} className="menu-item-icon" />
        Maintenance
      </a>
      <a className="menu-item" href="/messages">
        <FontAwesomeIcon icon={faComments} className="menu-item-icon" />
        Messages
      </a>
      <a className="menu-item" href="/settings">
        <FontAwesomeIcon icon={faCog} className="menu-item-icon" />
        Settings
      </a>
    </Menu>
  );
};
