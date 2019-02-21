import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

import Tab from '../Tab'

import './navbar.css'




const NavBar = ({tabList, activeTab, changeActiveTab }) => (
  <div className="tabs">
  <ul>
    { tabList.map(tab =>
        <Tab tab={tab}
            key={tab.name}
            activeTab={activeTab}
            changeActiveTab={changeActiveTab}
        />
      )}
  </ul>
</div>
);


NavBar.propTypes = {
  tabList: PropTypes.instanceOf(Array).isRequired,
  activeTab: PropTypes.string,
  changeActiveTab: PropTypes.func
};

NavBar.defaultProps = {
  tabList: [],
  activeTab: 'Line Item',
  changeActiveTab: PropTypes.func
};


export default NavBar;
