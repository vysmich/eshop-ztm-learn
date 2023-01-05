import { compose, createStore, applyMiddleware } from "redux";
//redux-persist
import { persistStore, persistReducer } from "redux-persist";
//storage
import storage from "redux-persist/lib/storage";
//middleware
import thunk from "redux-thunk";
import logger from "redux-logger";
//root reducer
import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);
console.log("middleWares", middleWares);

const composeEnhancer =
    (process.env.NODE_ENV !== "production" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user, categories"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
