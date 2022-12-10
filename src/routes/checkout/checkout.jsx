import React, { useContext } from "react";
//components
import CheckoutItem from "../../components/checkout-item/checkout-item";
//context
import { CartContext } from "../../context/cart.context";
//styles
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout-style";

function Checkout(props) {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;
