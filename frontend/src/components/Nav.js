import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { Button } from "../styles/Button";
import useLogin from "../hooks/useLogin";
import { successMsg } from "../utils/ToastFunction";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { isAuthenticated, user } = useLogin();
  const navigate = useNavigate();

  const loginWithRedirect = () => {
    navigate("login");
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
    successMsg("User logged out");
  };
  return (
    <div className="">
      <div className={menuIcon ? "navbar active" : "navbar"}>

    
        <ul className=" flex gap-20 items-center">
          <li>

    
            <NavLink
              to="/"
              className=" inline-block text-3xl font-medium uppercase text-white  duration-300 ease-linear hover:text-helper"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className=" inline-block text-3xl font-medium uppercase text-white  duration-300 ease-linear hover:text-helper"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className=" inline-block text-3xl font-medium uppercase text-white  duration-300 ease-linear hover:text-helper"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className=" inline-block text-3xl font-medium uppercase text-white  duration-300 ease-linear hover:text-helper"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>

          {isAuthenticated && (
            <li>
              <NavLink to="/user/profile" className=" inline-block text-3xl font-medium uppercase text-white  duration-300 ease-linear
              hover:text-helper">
                <Button
                  className="button text-white"
                  style={{
                    backgroundColor: "rgb(37, 39, 77)",
                    // color: "white",
                  }}
                >
                  {user.fullname}
                </Button>
              </NavLink>
            </li>
          )}

          {isAuthenticated ? (
            <li>
              <Button
                className="button"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
                onClick={() => logout()}
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">
                <Button
                  className="button text-white"
                  style={{
                    backgroundColor: "rgb(37, 39, 77)",
                    color: "white",
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button
                  className="button"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  Sign UP
                </Button>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/cart" className="  relative inline-block text-3xl font-medium uppercase text-white  duration-300 ease-linear hover:text-helper">
              <FiShoppingCart className=" relative text-[3.2rem]" />

       
              <span className=" w-[2.4rem] h-[2.4rem] absolute top-[-20%] left-[70%]  text-white 
              rounded-[50%] grid place-items-center bg-helper
              "> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}

  
        <div className=" cursor-pointer hidden border-none  z-[9999]">
          <CgMenu
            name="menu-outline"
            className=" text-7xl "
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="   hidden"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </div>
  );
};



export default Nav;
