import React from "react";
// import ReactDOM from "react-dom";

import Homepage from "./pages/HomePage";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./Components/Navbar";

import "./css/index.css";

import { Switch, Route, useLocation } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import Movies from "./pages/Movies";
import People from "./pages/People";
import TvShows from "./pages/TvShows";
import Movie from "./pages/Movie";
import MediaSearch from "./pages/MediaSearch";

const App = () => {
    let { pathname } = useLocation();

    return (
        <>
            {pathname !== "/signup" &&
                pathname !== "/login" &&
                pathname !== "/forgotpassword" && <Navbar />}
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
                <Route path="/forgotpassword">
                    <ResetPassword />
                </Route>
                <Route path="/movies/:id">
                    <Movie />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
                <Route path="/tvshows">
                    <TvShows />
                </Route>
                <Route path="/search">
                    <MediaSearch />
                </Route>
            </Switch>
        </>
    );
};

export default App;
