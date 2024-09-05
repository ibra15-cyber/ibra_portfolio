import Image from "next/image";
import React from "react";
import TestLogo from "../../../public/TestLogo.svg";

const Nav = () => {
  return (
    <div className="w-[1564px] h-[72px] bg-white  bg-no-repeat bg-origin-padding opacity-100 rounded-[72px]  overflow-hidden top-[18px] left-[18px]">
      <div className="w-[210.58px] h-[48px]">
        <Image
          src={TestLogo}
          alt="img"
          width={210}
          height={48}
          className="top-[30px] left-[50px]"
        />
      </div>

      <div className="w-[663px] h-[63px]"></div>
    </div>
  );
};

export default Nav;
