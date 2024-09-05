import React from "react";
import Nav from "./ui/Nav";
import RightSide from "./ui/RightSide";
import LeftSide from "./ui/LeftSide";
import Middle from "./ui/Middle";

const AdobeDash = () => {
  return (
    <div className="h-screen  bg-[#f6f6f8] bg-no-repeat bg-origin-padding opacity-100 top-0 left-0">
      <div className="">
        <Nav />
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
};

export default AdobeDash;
