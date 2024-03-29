import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase";

import {
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
} from "./categories-actions";

import { CATEGORIES_ACTIONS_TYPES } from "./categories-types";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

export function* onFetchCategories() {
    yield* takeLatest(
        CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)]);
}
