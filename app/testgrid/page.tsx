import React from "react";
import TestGrid from "./components/TestGrid";
import TestFlex from "./components/TestFlex";
const page = () => {
  return (
    // body div
    <div className="bg-lime-600 flex  flex-col justify-center items-center overflow-clip">
      <TestGrid />
      <TestFlex />
    </div>
  );
};

export default page;
