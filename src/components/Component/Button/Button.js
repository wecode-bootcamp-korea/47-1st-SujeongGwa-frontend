import React from 'react';

const Input = props => {
  const { className, btnText } = props;
  return <button className={className}>{btnText}</button>;
};

export default Input;
