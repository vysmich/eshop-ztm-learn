import React from "react";
import ReactDOM from "react-dom/client";
//components
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//context
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";
//styles
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
