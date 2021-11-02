import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import sendOrder from "./sendOrder";
import DishesForm from "./components/DishesForm/DishesForm";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <DishesForm onSubmit={sendOrder} />
    </Provider>,
    document.getElementById("root")
);
