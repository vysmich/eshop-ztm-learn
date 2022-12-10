import React, { useContext } from "react";
//context
import { CartContext } from "../../context/cart.context";
//styles
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from "./checkout-item-style";

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;

    const { addItemToCart, clearItemFromCart, removeItemFromCart } = useContext(CartContext);

    const removeItemHandler = () => {
        removeItemFromCart(cartItem);
    };

    const addItemHandler = () => {
        addItemToCart(cartItem);
    };

    const clearItemHandler = () => {
        clearItemFromCart(cartItem);
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
