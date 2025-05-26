import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}
// This component maintains a count state and increments it each time the button is clicked.
// It uses the useState hook from React to manage the state of the count.