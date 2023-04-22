import { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const displayCounter = useCallback(() => {
    return `Hey Counter one is ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter one {count}</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>
        Counter two {countTwo}
      </button>
      <Child showCount={displayCounter} />
    </div>
  );
};

export default Parent;
