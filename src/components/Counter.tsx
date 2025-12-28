import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { count, handleDecrement, handleIncrement } = useCounter();
  return (
    <div
      style={{
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
