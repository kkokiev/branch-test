import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';

const Shell = ({ children }) =>
  <div>
    <Header title="Test" subtitle="your skill" />
    {children}
  </div>;

Shell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Shell;
