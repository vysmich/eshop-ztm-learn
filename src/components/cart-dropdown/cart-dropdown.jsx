import React, { useContext } from "react";
//components
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
//context
import { CartContext } from "../../context/cart.context";
//styles
import "./cart-dropdown.scss";

function CartDropdown(props) {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
