import React from "react";
//components
import CheckoutItem from "../../components/checkout-item/checkout-item";
//context
//styles
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout-style";
//hooks
import { useSelector, useDispatch } from "react-redux";
//selectors
import { selectCartItems, selectCartTotal } from "./../../store/cart/cart-selector";
import { PaymentForm } from "../../components/payment-form/payment-form";

function Checkout(props) {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
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
            <PaymentForm />
        </CheckoutContainer>
    );
}

export default Checkout;
