import { memo } from "react";

const Child = ({ showCount }) => {
  console.log("child called");
  return <div>{showCount()}</div>;
};

export default memo(Child);
