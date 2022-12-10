import { createContext, useEffect, useState } from "react";
//utils
// import { addCollectionAndDocuments } from "../utils/firebase";
import { getCategoriesAndDocuments } from "../utils/firebase";
//data
// import SHOP_DATA from "../shop-data/shop-data.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments("categories");
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    return <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>{children}</CategoriesContext.Provider>;
};
