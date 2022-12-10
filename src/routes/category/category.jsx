import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { CategoriesContext } from "./../../context/categories.context";
import ProductCard from "./../../components/product-card/product-card";
//styles
import { CategoryContainer, Title } from "./category-style";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [product, setProduct] = useState(categoriesMap[category]);
    useEffect(() => {
        setProduct(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>{product && product.map((product) => <ProductCard key={product.id} product={product} />)}</CategoryContainer>
        </>
    );
};

export default Category;
