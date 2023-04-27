import React from "react";
import logo from "../assets/logo.svg";
import { siderbarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle = 'text-[#888] text-[13px] px-[25px] py-2 flex gap-[12px] font-bold items-center'
const activeStyle = 'text-[#0F7070] text-[13px] px-[25px] py-2 flex gap-[12px] font-bold items-center'

const SidebarLeft = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img src={logo} alt="logo ok" className="w-[120px] h-10" />
      </div>

      <div className="flex flex-col">
        {siderbarMenu.map((item) => (
          <NavLink key={item.path} to={item.path} end={item.end} className={({isActive}) => isActive ? activeStyle : notActiveStyle}>
           {item.icons}
           <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
