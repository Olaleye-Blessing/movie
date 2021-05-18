import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = () => {
    return (
        <main className="home">
            <section className="width">
                <header>
                    <h1>Welcome To WAHALA'S Official Page</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia, nisi distinctio. Nulla illo, aspernatur
                        iste expedita fugiat eaque quos odio labore a sunt, fuga
                        beatae ipsa natus quam modi et iusto dolor harum saepe?
                        Officia ipsa qui voluptas mollitia nisi.
                    </p>
                </header>
                {/* <ul className="nav__links flex-center">
                    <li>
                        <NavLink to="/login" className="btn btn-link">
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
                </ul> */}
            </section>
        </main>
    );
};

export default Homepage;
