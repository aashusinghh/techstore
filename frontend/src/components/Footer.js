import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <section className="bg-bg max-w-[60vw] m-auto py-10 px-40 rounded-[1rem] translate-y-[50%]">
        <div className="grid  grid-rows-2 ">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="last:justify-self-end last:self-end">
            <Button className="btn hireme-btn">
              <NavLink to="/"> Get Started </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer className="pt-56 pr-0 pb-40 pl-0 bg-footer_bg gap-24 ">
        <div className="container  grid grid-cols-4 text-center">
          <div className="">
            <h3 className="mb-9 text-hr">Tech Store</h3>
            <p className="text-white">Shop from best </p>
          </div>
          <div className="footer-subscribe flex flex-col">
            <h3 className="mb-9 text-hr">Subscribe to get important updates</h3>
            <form action="# " className=" flex flex-row justify-center gap-3">
              <input
                type="email"
                className=" h-14 m-0 max-w-[40%]"
                name="email"
                placeholder="YOUR E-MAIL"
              />

              <input
                type="submit"
                className=" h-14 pt-4 mt-0 max-w-[60%] text-xl"
                value="subscribe"
              />
            </form>
          </div>
          <div className="footer-social flex flex-col">
            <h3 className="mb-9 text-hr">Follow Us</h3>
            <div className="justify-center flex gap-4  ">
              <div className=" rounded-lg border-white">
                <FaDiscord className="icons text-4xl relative cursor-pointer text-white" />
              </div>
              <div className=" rounded-lg border-white">
                <FaInstagram className="icons text-4xl relative cursor-pointer text-white" />
              </div>
              <div className=" rounded-lg border-white">
                <FaYoutube className="icons text-4xl relative cursor-pointer text-white" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className="mb-9 text-hr">Call Us</h3>
            <h3 className="mb-9 text-hr">+91 1234567978</h3>
          </div>
        </div>

        <div className="f pt-36 ">
          <hr className="mb-8 h-1 text-hr" />
          <div className="container grid grid-two-column ">
            <p className="text-white">
              @{new Date().getFullYear()} Tech Store. All Rights Reserved
            </p>
            <div>
              <p className="text-white">PRIVACY POLICY</p>
              <p className="text-white">TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
