import React, { useContext } from "react";
//components
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
import { Link } from "react-router-dom";
//context
import { CartContext } from "../../context/cart.context";
//styles
import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown-style";

function CartDropdown(props) {
    const { cartItems } = useContext(CartContext);
    return (
        <CartDropdownContainer>
            <CartItems>{cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />) : <EmptyMessage>Your cart is empty</EmptyMessage>}</CartItems>
            <Link to={"/checkout"}>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </CartDropdownContainer>
    );
}

export default CartDropdown;
