import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faComments, faClipboardList, faHouse, faBroom, faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        <h1>Task Manager</h1>
      </Link>
      <Link className="menu-item" to="/">
        <FontAwesomeIcon icon={faHouse} className="menu-item-icon" />
        Dashboard
      </Link>
      <Link className="menu-item" to="/housekeeping">
        <FontAwesomeIcon icon={faBroom} className="menu-item-icon" />
        Housekeeping
      </Link>
      <Link className="menu-item" to="/maintenance">
        <FontAwesomeIcon icon={faWrench} className="menu-item-icon" />
        Maintenance
      </Link>
      <Link className="menu-item" to="/messages">
        <FontAwesomeIcon icon={faComments} className="menu-item-icon" />
        Messages
      </Link>
      <Link className="menu-item" to="/settings">
        <FontAwesomeIcon icon={faCog} className="menu-item-icon" />
        Settings
      </Link>
    </Menu>
  );
};
