import React, { useState } from "react";
import Parent from "./Parent";

const Child = () => {
  const [nametxt, setNametxt] = useState("");
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={nametxt}
        onChange={(e) => setNametxt(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <Parent name={nametxt} num={num} />
    </div>
  );
};

export default Child;
