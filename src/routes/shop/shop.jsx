import React from "react";
//components
import { CategoriesPreview } from "../categories-preview/categories-preview";
import Category from "./../category/category";
import { Routes, Route } from "react-router-dom";

//styles
import "./shop.scss";

function Shop() {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;
