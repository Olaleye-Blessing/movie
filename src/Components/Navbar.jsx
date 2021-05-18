import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

import HomeLogoLink from "./HomeLogoLink";

const Navbar = () => {
    // const [navItems, setNavItems] = useState([
    //     { path: "/movies", label: "movies", active: false },
    //     { path: "/tvshows", label: "tvshows", active: false },
    //     { path: "/people", label: "people", active: false },
    //     { path: "/login", label: "login", active: false },
    //     { path: "/signup", label: "signup", active: false },
    // ]);

    let navItems = [
        { path: "/movies", label: "movies", active: false },
        { path: "/tvshows", label: "tvshows", active: false },
        { path: "/people", label: "people", active: false },
        { path: "/login", label: "login", active: false },
        { path: "/signup", label: "signup", active: false },
    ];

    const navLinksRef = useRef(null);
    const navLinksContRef = useRef(null);
    const navToggleRef = useRef(null);

    const [showLinks, setShowLinks] = useState(false);

    const searchRef = useRef(null);
    const searchCont = useRef(null);
    // const [showSearch, setShowSearch] = useState(false);

    const toggleNav = () => {
        navToggleRef.current.classList.toggle("change");
        setShowLinks(!showLinks);
    };

    const toggleFormCont = () => {
        console.log("yes");
        searchCont.current.classList.toggle("change");
        // setShowSearch(!showSearch);
    };

    useEffect(() => {
        let linksHeight = navLinksRef.current.getBoundingClientRect().height;

        if (showLinks) {
            navLinksContRef.current.style.height = `${linksHeight}px`;
        } else {
            navLinksContRef.current.style.height = `0px`;
        }
    }, [showLinks]);

    return (
        <nav>
            <div className="width nav">
                <HomeLogoLink />
                <div ref={navLinksContRef} className="nav__links-container">
                    <ul ref={navLinksRef} className="nav__links">
                        {navItems.map((item, i) => {
                            let { path, label } = item;
                            return (
                                <li
                                    className={`nav__link ${
                                        path === "/login" && "mg-l-a"
                                    }`}
                                    key={path}
                                >
                                    <NavLink
                                        to={path}
                                        className={`btn btn-link ${
                                            path === "/signup" &&
                                            "btn-border btn-extra"
                                        }`}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button
                    onClick={toggleNav}
                    ref={navToggleRef}
                    type="button"
                    className="hamburger nav__toggle"
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
                <button
                    type="button"
                    className="btn-icon"
                    onClick={toggleFormCont}
                >
                    <figure className="nav__search lone-icon">
                        <BiSearchAlt />
                    </figure>
                </button>
            </div>
            <form className={`nav__form width`} ref={searchCont}>
                <input
                    ref={searchRef}
                    type="search"
                    name="search"
                    id="search"
                    className="form__input"
                    placeholder="search for your tvshow, movie, person"
                    aria-label="search for your tvshow, movie, person"
                />
            </form>
        </nav>
    );
};

export default Navbar;
