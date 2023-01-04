import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategoriesArray], (categories) => {
    return categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
});
