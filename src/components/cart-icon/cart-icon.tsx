import React from "react";
//hooks
import { useSelector, useDispatch } from "react-redux";
//redux selector
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart-selector";
//redux action
import { setIsCartOpen } from "../../store/cart/cart-action";
//styles
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon-style";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const handleClick = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={handleClick}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
