import React from "react";
import ReactDOM from "react-dom/client";
//components
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//store
import { Provider } from "react-redux";
import { store } from "./store/store";
//styles
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
