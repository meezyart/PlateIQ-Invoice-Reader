import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



const Tab = (props) => {
  const { name, snug } = props.tab;
  const { activeTab, changeActiveTab } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={name === activeTab ? "is-active":''} onClick={() => changeActiveTab(name)}>
      <Link to={snug || name}>
      <span>{name}</span>
      </Link>

    </li>
  );
};


Tab.propTypes = {
  tab: PropTypes.instanceOf(Object).isRequired,
  activeTab: PropTypes.string.isRequired,
  changeActiveTab: PropTypes.func.isRequired
};

export default Tab;
