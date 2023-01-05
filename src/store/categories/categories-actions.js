import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories-types";
// import { dispatch } from 'react-redux';
import { getCategoriesAndDocuments } from "../../utils/firebase";

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
};
