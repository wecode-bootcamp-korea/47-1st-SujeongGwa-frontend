import React from 'react';

const Input = props => {
  const { name, type, placeholder } = props;
  return <input name={name} type={type} placeholder={placeholder} />;
};

export default Input;
