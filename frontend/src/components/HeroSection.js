import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <div className="">
      <div className=" py-38 px-0 pt-[10rem] pb-[11%] bg-about_bg">
        <div className="  max-w-[120rem] my-0 mx-auto">
          <div className="grid grid-cols-2 ">
            <div className=" mt-30">
              <p className=" mb-0 text-para_color my-8 mx-0">Welcome to </p>
              <h1 className="capitalize font-bold text-para_color"> {name} </h1>

              <p className="text-para_color my-8 mx-0">
                Welcome to TechStore - your ultimate destination for all your
                electronic needs. Browse our extensive range of products, from
                smartphones to laptops, gaming consoles, and accessories. With
                easy navigation and a user-friendly interface, shopping with us
                has never been easier. Enjoy fast and secure delivery to your
                doorstep.
              </p>
              <NavLink to="/products">
                <Button className="bg-white text-black">shop now</Button>
              </NavLink>
            </div>
            <div className=" w-[100%] h-auto flex justify-center items-center">
              <figure className="relative  ">
                <img
                  src="images/store.jpg"
                  alt="hero-section-family"
                  className=" w-[100%] h-auto"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
