import React, { useContext } from "react";
//components
import ProductCard from "../../components/product-card/product-card";
//context
import { ProductsContext } from "../../context/products.context";
//styles
import "./shop.scss";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
}

export default Shop;
