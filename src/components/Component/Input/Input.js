import React from 'react';

const Input = props => {
  const { name, className, type, placeholder } = props;
  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
