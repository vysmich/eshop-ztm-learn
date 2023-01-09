import React from "react";
import ReactDOM from "react-dom/client";
//components
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//store
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
//stripe
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe";

//styles
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Elements stripe={stripePromise}>
                        <App />
                    </Elements>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
