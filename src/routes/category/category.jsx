import React, { useContext, useState, useEffect } from "react";
//components
import ProductCard from "./../../components/product-card/product-card";
//styles
import { CategoryContainer, Title } from "./category-style";
//hooks
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/categories-selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
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
