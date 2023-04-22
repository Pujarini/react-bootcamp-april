import { memo } from "react";

const Child = ({ showCount }) => {
  return <div>{showCount()}</div>;
};

export default memo(Child);
