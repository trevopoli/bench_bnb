import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, logout, signup } from "./actions/session_actions";
import { fetchBenches } from "./actions/bench_actions";

//testing
window.signup = signup;
window.logout = logout;
window.login = login;
window.fetchBenches = fetchBenches;

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if(window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});