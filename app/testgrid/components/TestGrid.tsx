import React from "react";
import { boxes } from "./data";

const TestGrid = () => {
  return (
    <div className="my-10 bg-white-200 h-screen grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-5 grid-row-8 gap-1 p-5 w-[80vw]">
      {boxes.map((box) => (
        <div
          key={box.id}
          className={`${box.cName} flex justify-center items-center p-10 bg-black-100`}
        >
          <h1 className="text-red-600 align-middle sm:text-sm md:text-md lg:text-lg">
            {box.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default TestGrid;
