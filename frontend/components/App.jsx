import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SearchContainer from './search/search_container';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
    </div>
);

export default App;