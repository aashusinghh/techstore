import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatPrice from "./Helpers/FormatPrice";
import useLogin from "./hooks/useLogin";
import { useProductContext } from "./context/productcontex";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  const { checkOutPrice } = useProductContext();

  const { isAuthenticated, user } = useLogin();

  if (cart.length === 0) {
    return (
      <div className="grid place-items-center h-[50vh] bg-bg pt-32 ">
        <h3 className="text-[4.2rem] capitalize font-normal">
          No Item in Cart
        </h3>
      </div>
    );
  }

  const handleCheckout = () => {
    const items = cart;
    checkOutPrice(items);
  };

  return (
    <div className="pt-64 ">
      <div className="max-w-[120rem] my-0 mx-auto">
        {isAuthenticated && (
          <div className="cart-user--profile flex justify-start items-center gap-5 mb-22">
            <img
              className="w-32 h-32 rounded-[50%]"
              src="/download.png"
              alt={user?.fullname}
            />
            <h2 className="cart-user--name text-4xl capitalize ">
              {user.fullname}
            </h2>
          </div>
        )}

        <div className="cart_heading grid grid-cols-5 mt-8">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item py-13 px-0 flex flex-col gap-13">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />

        <div className="cart-two-button mt-8 flex justify-between ">
          <NavLink to="/products">
            <Button className=""> continue Shopping </Button>
          </NavLink>

          {/* <NavLink to="/checkout"> */}
          <Button
            className="text-para_color bg-about_bg"
            onClick={handleCheckout}
          >
            {" "}
            Buy Now
          </Button>
          <Button className=" btn-clear bg-rm_icon" onClick={clearCart}>
            clear cart
          </Button>
        </div>

        <div className="order-total--amount w-[100%] mt-20 mx-0 capitalize flex flex-col justify-end items-end ">
          <div
            className="order-total--subdata flex gap-[1.2rem] justify-between flex-col p-[3.2rem] border-[0.1rem] 
          bg-fafa
          border-solid border-bd_color"
          >
            <div className="flex gap-[1.2rem] ">
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div className="flex gap-[1.2rem] ">
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div className="flex gap-[1.2rem]  ">
              <p className="font-bold text-heading">order total:</p>
              <p className="font-bold text-heading">
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
