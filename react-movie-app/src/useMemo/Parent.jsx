import React, { useMemo } from "react";
// import { useMemo } from "react";

const Parent = ({ num, name }) => {
  const calcSumValues = (num) => {
    let res = 0;
    for (let i = Math.pow(num, 7); i >= 0; i--) {
      res += Math.sqrt(i);
    }
    return res;
  };

  const result = useMemo(() => calcSumValues(num), [num]);

  // const result = useMemo(() => calcSumValues(num), [num]);

  return (
    <div>
      Hi {name || "dummy"} the value is {result || 0}
    </div>
  );
};

export default Parent;
