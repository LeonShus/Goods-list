import React from "react"
import ReactDOM from "react-dom"
import {App} from "./App"
import reportWebVitals from "./reportWebVitals"
import {Provider} from "react-redux";
import {store} from "./s1-bll/b1-store/store";
import "./index.scss"


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
