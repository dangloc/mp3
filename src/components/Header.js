import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } = icons;

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center w-full gap-6">
        <div className="flex text-gray-400 gap-6">
          <span>
            <HiOutlineArrowNarrowLeft site={25} />
          </span>
          <span>
            <HiOutlineArrowNarrowRight site={25} />
          </span>
        </div>
        <div className="w-3/4">
          <Search />
        </div>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Header;
