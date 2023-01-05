import React, { useContext } from "react";
//components
import { Outlet } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview";
//hooks
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories-selector";

export function CategoriesPreview({}) {
    const categoriesMap = useSelector(selectCategoriesMap);
    console.log("categoriesMap", categoriesMap);

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
