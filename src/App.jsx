import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
//routes
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout";
//firebase
import { createUserProfileDocument, onAuthStateChangedListener } from "./utils/firebase";
//redux actions
import { setCurrentUser } from "./store/user/user-actions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserProfileDocument(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path={"shop/*"} element={<Shop />} />
                <Route path={"auth"} element={<Authentication />} />
                <Route path={"checkout"} element={<Checkout />} />
            </Route>
        </Routes>
    );
}

export default App;
