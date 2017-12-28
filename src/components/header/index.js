import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) =>
  <header className="header">
    <div className="container">
      <h1 className="header__title">
        <span className="bold">{title}</span>
        {' '}
        {subtitle}
      </h1>
    </div>
  </header>;

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default Header;
