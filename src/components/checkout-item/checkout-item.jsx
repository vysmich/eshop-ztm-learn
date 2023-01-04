import React from "react";
//actions
import { addItemToCart, removeItemToCart, clearItemFromCart } from "../../store/cart/cart-action";
//selectors
import { selectCartItems } from "./../../store/cart/cart-selector";
//hooks
import { useSelector, useDispatch } from "react-redux";
//styles
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from "./checkout-item-style";

function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price, quantity } = cartItem;

    const removeItemHandler = () => {
        dispatch(removeItemToCart(cartItems, cartItem));
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
}

export default CheckoutItem;
