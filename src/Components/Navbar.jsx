import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { IoIosEasel } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

import HomeLogoLink from "./HomeLogoLink";

const Navbar = () => {
    const mainNav = [
        {
            path: "/movies",
            label: "movies",
            active: false,
            icon: <MdLocalMovies />,
        },
        {
            path: "/tvshows",
            label: "tvshows",
            active: false,
            icon: <IoIosEasel />,
        },
        {
            path: "/people",
            label: "people",
            active: false,
            icon: <BsFillPeopleFill />,
        },
    ];

    const authNav = [
        { path: "/login", label: "login", active: false },
        { path: "/signup", label: "signup", active: false },
    ];

    const searchRef = useRef(null);
    const searchCont = useRef(null);

    const toggleFormCont = () => {
        console.log("yes");
        searchCont.current.classList.toggle("change");
        // setShowSearch(!showSearch);
    };

    const navparent = useRef(null);
    const navToggleRef = useRef(null);
    const navMainLinks = useRef(null);
    const navAuth = useRef(null);
    const navLinksContRef = useRef(null);

    const [showLinks, setShowLinks] = useState(false);

    const toggleNav = () => {
        navToggleRef.current.classList.toggle("change");

        setShowLinks(!showLinks);
    };

    useEffect(() => {
        if (showLinks) {
            //windows height - parent nav container height
            let remainingWindowHeight =
                document.documentElement.clientHeight -
                navparent.current.getBoundingClientRect().height;

            let navAuthHeight = navAuth.current.getBoundingClientRect().height;
            let navMainLinksHeight =
                navMainLinks.current.getBoundingClientRect().height;

            // addition of both navs in the container
            let totalNavsHeight = navAuthHeight + navMainLinksHeight;

            // use this for screen with small height. height will be either the whole sreen or addition of both navs
            let maxHeightNavCanObtain = Math.max(
                remainingWindowHeight,
                totalNavsHeight
            );

            navLinksContRef.current.style.height = `${maxHeightNavCanObtain}px`;

            navLinksContRef.current.classList.add("show");
        } else {
            navLinksContRef.current.style.height = `0px`;
            navLinksContRef.current.classList.remove("show");
            searchCont.current.classList.remove("change");
        }
    }, [showLinks]);

    return (
        <nav>
            <div className="width nav" ref={navparent}>
                <HomeLogoLink />
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
                <div className="nav__links-container" ref={navLinksContRef}>
                    <div className="nav__main-links" ref={navMainLinks}>
                        <ul className="nav__main">
                            {mainNav.map((item) => {
                                let { path, label, icon } = item;
                                return (
                                    <li key={path} className={`nav__link`}>
                                        <NavLink
                                            to={path}
                                            className={`btn btn-link`}
                                        >
                                            <span className={`nav__link-icon`}>
                                                {icon}
                                            </span>
                                            {label}
                                        </NavLink>
                                    </li>
                                );
                            })}
                            <li className={`nav__link`}>
                                <button
                                    type="button"
                                    className="btn-icon"
                                    onClick={toggleFormCont}
                                >
                                    <figure className="nav__search lone-icon">
                                        <BiSearchAlt />
                                    </figure>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav__auth" ref={navAuth}>
                        {authNav.map((item) => {
                            let { path, label } = item;
                            return (
                                <li key={path} className={`nav__link`}>
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
