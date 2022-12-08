import React, { useContext } from "react";
import Button from "../button/button";
import "./product-card.scss";
import { CartContext } from "../../context/cart.context";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const handleClick = () => {
    addItemToCart(product);
    console.log(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleClick}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
