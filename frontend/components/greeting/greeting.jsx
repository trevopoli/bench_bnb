import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    const userGreetingHeader = () => (
        <div className="header-greeting">
            <h3>Welcome, {currentUser.username}.</h3>
             <button onClick={logout}>Logout</button>
        </div>
    );

    const linkHeader = () => (
            <div className="header-greeting">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
    );

    return currentUser ? userGreetingHeader() : linkHeader();
};

export default Greeting;