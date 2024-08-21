import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((countFromCB) => {
      return countFromCB + 1;
    }); // state become 1
    setCount((countFromCB) => {
      return countFromCB + 1;
    }); // state become 2
  };

  return <button onClick={handleClick}>counter {count}</button>;
}
