import React from "react";
import { NavLink } from "react-router-dom";

import HomeLogoLink from "./HomeLogoLink";

const Navbar = () => {
    // console.log(React.version);
    return (
        <nav>
            <div className="width nav">
                <HomeLogoLink />
                <ul className="nav__links">
                    <li>
                        <NavLink to="/login" className="btn not btn-link">
                            login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            className="btn btn-extra btn-link"
                        >
                            sign up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
