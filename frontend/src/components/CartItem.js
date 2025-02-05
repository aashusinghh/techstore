import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { warningMsg } from "../utils/ToastFunction";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-cols-5 mt-3">
   

      <div className="cart-image--name items-center grid grid-cols-1 capitalize text-left">
        {/* <div>
          <figure>
            <img
              className="m-w-20 h-20 object-contain text-transparent"
              src={
                "https://images.pexels.com/photos/14328581/pexels-photo-14328581.jpeg"
              }
              alt={id}
            />
          </figure>
        </div> */}
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div className="">
        <FaTrash
          className=" text-3xl text-rm_icon cursor-pointer "
          onClick={() => {
            removeItem(id);
            warningMsg("Removed from Cart");
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
