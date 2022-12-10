import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";

export function CategoriesPreview({}) {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className='category-preview-container'>
            {Object.keys(categoriesMap).map((title) => (
                <div className='shop-container' key={title}>
                    {Object.keys(categoriesMap).map((key) => {
                        const products = categoriesMap[key];
                        return <CategoryPreview key={key} title={key} products={products} />;
                    })}
                </div>
            ))}
            <Outlet />
        </div>
    );
}
