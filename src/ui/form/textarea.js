import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers } from 'recompose';

const enhance = compose(
  withHandlers({
    onChange: ({ onChange }) => ({ target: { value } }) => onChange(value)
  })
);

const Textarea = ({ className, onChange, placeholder, value }) =>
  <textarea className={className} onChange={onChange} placeholder={placeholder} value={value} />;

Textarea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default enhance(Textarea);
