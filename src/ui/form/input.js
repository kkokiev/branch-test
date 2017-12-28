import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';

const enhance = compose(
  withHandlers({
    onChange: ({ onChange }) => ({ target: { value } }) => onChange(value)
  })
);

const Input = ({ className, onChange, placeholder, type, value }) =>
  <input
    className={className}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  />;

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default enhance(Input);
