import './Count.scss';

const Count = ({ countNumber, setCount }) => {
  const decrease = () => {
    if (countNumber <= 1) {
      return;
    } else {
      setCount(countNumber - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrease}>-</button>
        <div className="countInputText">{countNumber}</div>
        <button
          onClick={() => {
            setCount(countNumber + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
