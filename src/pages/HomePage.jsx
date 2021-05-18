import React from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/MediaBox";
import { useGlobalContext } from "../contexts/GlobalContext";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";
// import { NavLink } from "react-router-dom";

const Homepage = () => {
    let { key } = useGlobalContext();
    let {
        data: allMedia,
        loading,
        error,
    } = useInfiniteScrolling(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`
    );

    return (
        <main className="home">
            <section className="width">
                <section className="media width">
                    {allMedia.length > 0 &&
                        allMedia.map((media) => {
                            let {
                                id,
                                poster_path,
                                profile_path,
                                name,
                                title,
                                media_type,
                            } = media;
                            return (
                                <Media
                                    key={`${id}`}
                                    img={poster_path || profile_path}
                                    alt={title || name}
                                    type={media_type === "person" && "person"}
                                />
                            );
                        })}
                </section>
                {loading && <LoadingIndicator />}
                {error && <div>{error.message || error}</div>}
            </section>
        </main>
    );
};

export default Homepage;
