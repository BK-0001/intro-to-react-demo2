import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(count, "before first update");
    setCount((countFromCB) => {
      return countFromCB + 1;
    }); // state become 1
    console.log(count, "after first update");
    setCount((countFromCB) => {
      return countFromCB + 1;
    }); // state become 2
    console.log(count, "final update");
  };

  return <button onClick={handleClick}>counter {count}</button>;
}
