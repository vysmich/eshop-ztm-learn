import React, { useContext, useState, useEffect } from "react";
//components
import ProductCard from "./../../components/product-card/product-card";
import Spinner from "./../../components/spinner/spinner";
//styles
import { CategoryContainer, Title } from "./category-style";
//hooks
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//selectors
import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from "../../store/categories/categories-selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    console.log("isLoading", isLoading);
    const [product, setProduct] = useState(categoriesMap[category]);

    useEffect(() => {
        setProduct(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {product &&
                        product.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </>
    );
};

export default Category;
