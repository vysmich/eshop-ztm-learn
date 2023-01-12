import { createSelector } from "reselect";
//Types
import { CategoryMap } from "./categories-types";
import { CategoriesState } from "./categories-reducer";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategoriesArray = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategoriesArray],
    (categories): CategoryMap => {
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap);
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);
