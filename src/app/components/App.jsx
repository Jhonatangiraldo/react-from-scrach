import React, { useState, useEffect } from 'react';
import Swtich from './Switch';

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }, []);

  const increment = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const decrement = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {counter}
      <button onClick={decrement}>Decrement</button>
      <label>Hey Guys!</label>
      <Swtich/>
    </div>
  );
}
