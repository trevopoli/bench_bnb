import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';
import BenchShowContainer from "./bench_show/bench_show_container";
import { Switch } from "react-router-dom";

const App = () => (
    <div>
        <header className="header-wrapper">
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Switch>
            <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route exact path="/benches/:benchId" component={BenchShowContainer} />
            <Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>
);

export default App;