import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import * as SessionAPIUtil from "./util/session_api_util";

window.signup = SessionAPIUtil.signup;
window.logout = SessionAPIUtil.logout;
window.login = SessionAPIUtil.login;

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});