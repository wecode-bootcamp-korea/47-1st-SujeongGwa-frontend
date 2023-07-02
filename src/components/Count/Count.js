import React from 'react';
import './Count.scss';

const Count = ({ countNumber, setCount, isDisabled }) => {
  const decrease = () => {
    if (countNumber <= 1) {
      return;
    } else {
      setCount(prevCount => prevCount - 1);
    }
  };

  const increase = () => {
    if (isDisabled) {
      return;
    } else {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrease}>-</button>
        <div className="countInputText">{countNumber}</div>
        <button onClick={increase} disabled={isDisabled}>
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
