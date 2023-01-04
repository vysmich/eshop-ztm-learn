import React, { useContext } from "react";
//components
import Button from "../button/button";
//hooks
import { useSelector, useDispatch } from "react-redux";
//actions
import { addItemToCart } from "../../store/cart/cart-action";
//selectors
import { selectCartItems } from "./../../store/cart/cart-selector";
//styles
import { ProductCartContainer, Footer, Name, Price } from "./product-card-style";
import { BUTTON_TYPE_CLASSES } from "../button/button";

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, price, imageUrl } = product;
    const handleClick = () => {
        dispatch(addItemToCart(cartItems, product));
    };
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleClick}>
                Add to card
            </Button>
        </ProductCartContainer>
    );
}

export default ProductCard;
