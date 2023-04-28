import React from "react";
import icons from "../ultis/icons";

const { FiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center">
      <span className=" bg-[#DDE4E4] rounded-l-[20px] h-10 flex justify-center items-center pl-4 py-2">
        <FiSearch />
      </span>
      <input
        type="text"
        className="outline-none bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] w-full h-10 text-gray-500 placeholder:text-gray-400"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
