'use client';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    if (count === 5) {
      throw new Error('Count reached 5');
    } else {
      setCount(count + 1);
    }
  };
  const resetCount = () => setCount(0);
  return (
    <main>
      <h1>Hello world</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>click me</button>
      <button onClick={resetCount}>reset</button>
    </main>
  );
}
