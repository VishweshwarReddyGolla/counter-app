import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevValue) => prevValue + 1);
  const decrement = () => setCount((prevValue) => prevValue - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '24px' }}>{count}</p>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
