import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { CategoriesContext } from "./../../context/categories.context";
import ProductCard from "./../../components/product-card/product-card";
//styles
import "./category.scss";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [product, setProduct] = useState(categoriesMap[category]);
    useEffect(() => {
        setProduct(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-detail-container'>{product && product.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </>
    );
};

export default Category;
