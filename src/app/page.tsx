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
// SENTRY_AUTH_TOKEN=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
  return (
    <main>
      <h1>Hello world</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>click me</button>
      <button onClick={resetCount}>reset</button>
    </main>
  );
}
