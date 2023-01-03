import { createContext, useEffect, useState, useReducer } from "react";
import { createUserProfileDocument, onAuthStateChangedListener } from "../utils/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});
export const USER_ACTIONS_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTIONS_TYPES.SET_CURRENT_USER:
            return { currentUser: payload };
        default:
            throw new Error(`Unhandled action type: ${type} in userReducer`);
    }
};
const INITIAL_STATE = {
    currentUser: null,
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, { currentUser: null });

    const setCurrentUser = (user) => dispatch({ type: USER_ACTIONS_TYPES.SET_CURRENT_USER, payload: user });

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserProfileDocument(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};
