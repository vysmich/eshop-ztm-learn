import React from "react";
//components
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
import { Link } from "react-router-dom";
//redux selector
import { selectCartItems } from "../../store/cart/cart-selector";
//hooks
import { useSelector } from "react-redux";
//styles
import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
    CartDropdownLink,
} from "./cart-dropdown-style";

function CartDropdown(props) {
    const cartItems = useSelector(selectCartItems);

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <CartDropdownLink to={"/checkout"}>
                <Button>CHECKOUT</Button>
            </CartDropdownLink>
        </CartDropdownContainer>
    );
}

export default CartDropdown;
