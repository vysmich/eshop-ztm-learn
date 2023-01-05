import React, { useEffect } from "react";
//components
import { CategoriesPreview } from "../categories-preview/categories-preview";
import Category from "./../category/category";
import { Routes, Route } from "react-router-dom";
//firebase
import { getCategoriesAndDocuments } from "../../utils/firebase";
//store actions
import { fetchCategoriesAsync } from "../../store/categories/categories-actions";
//hooks
import { useDispatch } from "react-redux";

function Shop() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;
