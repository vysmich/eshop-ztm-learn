import React, { useEffect } from "react";
//components
import { CategoriesPreview } from "../categories-preview/categories-preview";
import Category from "./../category/category";
import { Routes, Route } from "react-router-dom";
//firebase
import { getCategoriesAndDocuments } from "../../utils/firebase";
//store actions
import { setCategoriesMap } from "../../store/categories/categories-actions";
import { useDispatch } from "react-redux";
//hooks

function Shop() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments("categories");
            dispatch(setCategoriesMap(categoriesArray));
        };
        getCategoriesMap();
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;
