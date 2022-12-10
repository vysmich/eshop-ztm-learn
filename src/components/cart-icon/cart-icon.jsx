import React, { useContext } from "react";

//context
import { CartContext } from "../../context/cart.context";
//styles
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon-style";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const handleClick = () => {
        setIsCartOpen(!isCartOpen);
    };
    return (
        <CartIconContainer onClick={handleClick}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
