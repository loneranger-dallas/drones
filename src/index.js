import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./redux/configureStore"
import { Provider as ReduxProvider } from "react-redux";
import "./index.scss";
import "assets/styles/base.scss";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <Route component={App} />
        </Router>
    </ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
