import React, { useRef, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

import HomeLogoLink from "./HomeLogoLink";
import { useGlobalContext } from "../contexts/GlobalContext";
// import Slider from "./Slider";

const Navbar = () => {
    let { setSearchQuery } = useGlobalContext();

    let history = useHistory();
    let pathname = history.location.pathname;

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
        searchRef.current.focus();
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

    //? remove search form when leaving search page for other pages
    if (pathname !== "/search") {
        if (searchCont.current != null) {
            searchCont.current.classList.remove("change");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pathname !== "/search") {
            console.log("yes");
            history.push("/search");
        }
    };

    const handleSearchChange = (e) => {
        if (pathname !== "/search") {
            console.log("yes");
            history.push("/search");
        }
        let { value } = e.target;
        setSearchQuery(value);
    };

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
            {/* <Slider /> */}
            <form
                className={`nav__form width`}
                ref={searchCont}
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleSearchChange}
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
