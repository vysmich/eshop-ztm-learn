import { CartItemContainer, ItemDetails } from "./cart-item-style";
import { CartItem as TCartItem } from "../../store/cart/cart-types";

export type CartItemProps = {
    cartItem: TCartItem;
};

export const CartItem = ({ cartItem }:CartItemProps) => {
    const { imageUrl, price, name, quantity } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
