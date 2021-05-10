import React from "react";
// import ReactDOM from "react-dom";

import Homepage from "./pages/HomePage";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./Components/Navbar";

import "./css/index.css";

import { Switch, Route, useLocation } from "react-router-dom";

const App = () => {
    let { pathname } = useLocation();

    return (
        <>
            {pathname !== "/signup" && pathname !== "/login" && <Navbar />}
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </>
    );
};

export default App;
