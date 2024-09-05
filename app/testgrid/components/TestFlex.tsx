import React from "react";
import { boxes2 } from "./data";

const TestFlex = () => {
  return (
    <div className="bg-white-200  mb-10 h-screen flex flex-wrap justify-center items-center w-[80vw]">
      {boxes2.map((box) => (
        <div
          key={box.id}
          className={`bg-black-200 px-10  m-2 w-[80vw] md:w-[30vw] p-10 md:p-20  flex justify-center  ${box.cName}`}
        >
          <h1>{box.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default TestFlex;
