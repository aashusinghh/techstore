import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import { MdStoreMallDirectory } from "react-icons/md";
const Header = () => {
  return (
    <navbar className="p-5 bg-about_bg flex items-center w-full h-25 justify-evenly fixed z-30">
      <NavLink to="/">
        <div className="flex ">
          <h2 className="text-white ">Tech Store</h2>
          <h2 className="text-white ">
            <MdStoreMallDirectory />
          </h2>
        </div>
      </NavLink>
      <Nav />
    </navbar>
  );
};
// background-color: #25274d;
// color: #fff;

export default Header;
