import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (


    <div className="">
      <div className=" flex  items-center text-[1.4rem] gap-[2rem]">
        <button className="border-none bg-white cursor-pointer" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className=" text-[2rem] text-btn">{amount}</div>
        <button className="border-none bg-white cursor-pointer" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
