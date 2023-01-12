import {
    createAction,
    Action,
    ActionWithPayload,
    withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES, Category } from "./categories-types";

export type FetchCategoriesStart = Action<CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START>;
export type FetchCategoriesSuccess = ActionWithPayload<
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS,
    Category[]
>;
export type FetchCategoriesFailed = ActionWithPayload<
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED,
    Error
>;

export type CategoriesActions =
    | FetchCategoriesStart
    | FetchCategoriesSuccess
    | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(
    (): FetchCategoriesStart => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START)
);

export const fetchCategoriesSuccess = withMatcher(
    (categoriesArray: Category[]): FetchCategoriesSuccess =>
        createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher((error: Error) =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED, error)
);
