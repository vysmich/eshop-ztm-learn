import React, { useContext } from "react";
//components
import Button from "../button/button";
//context
import { CartContext } from "../../context/cart.context";
//styles
import { ProductCartContainer, Footer, Name, Price } from "./product-card-style";
import { BUTTON_TYPE_CLASSES } from "../button/button";

function ProductCard({ product }) {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;
    const handleClick = () => {
        addItemToCart(product);
        console.log(product);
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
