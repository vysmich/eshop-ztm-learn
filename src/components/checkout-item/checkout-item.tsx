import React, { FC } from "react";
//actions
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart-action";
//selectors
import { selectCartItems } from "../../store/cart/cart-selector";
//hooks
import { useSelector, useDispatch } from "react-redux";
//types
import { CartItem } from "../../store/cart/cart-types";
//styles
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from "./checkout-item-style";
import { CartItemContainer } from './../cart-item/cart-item-style';

type CartItemProps = {
    cartItem: CartItem;
};

const CheckoutItem: FC<CartItemProps> = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price, quantity } = cartItem;

    const removeItemHandler = () => {
        dispatch(removeItemFromCart(cartItems, cartItem));
    };

    const addItemHandler = () => {
        dispatch(addItemToCart(cartItems, cartItem));
    };

    const clearItemHandler = () => {
        dispatch(clearItemFromCart(cartItems, cartItem));
    };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> {price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
