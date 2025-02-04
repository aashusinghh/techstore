import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { warningMsg } from "../utils/ToastFunction";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-cols-5">
      {/* align-items: center;
    grid-template-columns: 0.4fr 1fr;
 */}

      <div className="cart-image--name items-center grid gap-4 grid-cols-[200px_minmax(900px,_1fr)_100px] capitalize text-left">
        <div>
          <figure>
            <img
              className="m-w-20 h-20 object-contain text-transparent"
              src={image}
              alt={id}
            />
          </figure>
        </div>
        <div>
          <p>{name}</p>

          {/* <div className="color-div flex items-center justify-center gap-4">
            <p>color:</p>
            <div
              className="color-style w-5 h-5 rounded-[50%]"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div> */}
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

      <div>
        <FaTrash
          className="remove_icon text-3xl text-rm_icon cursor-pointer "
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
