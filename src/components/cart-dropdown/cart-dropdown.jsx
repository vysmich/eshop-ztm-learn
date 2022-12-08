import React, { useContext } from "react";
//components
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
//context
import { CartContext } from "../../context/cart.context";
//styles
import "./cart-dropdown.scss";
import { Link } from "react-router-dom";

function CartDropdown(props) {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>{cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />) : <span className='empty-message'>Your cart is empty</span>}</div>
            <Link to={"/checkout"}>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </div>
    );
}

export default CartDropdown;
