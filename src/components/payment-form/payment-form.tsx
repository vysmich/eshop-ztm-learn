//components
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
//style
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form-style";
//hooks
import { useState } from "react";
import { useSelector } from "react-redux";
//Selectors
import { selectCartTotal } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
//Types
import { FormEvent } from "react";

export function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount + 1 * 100 }),
        }).then((res) => {
            return res.json();
        });

        const {
            paymentIntent: { client_secret },
        } = response;

        console.log(client_secret);

        const cardDetails = elements.getElement(CardElement);

        if (cardDetails === null) {
            return;
        }
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: currentUser ? currentUser.displayName : "Guest",
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            console.log(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                console.log("Payment succeeded!");
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment:</h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
                    Pay
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}
