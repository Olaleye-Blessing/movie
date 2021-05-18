import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/MediaBox";
import { useGlobalContext } from "../contexts/GlobalContext";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";
import useTitle from "../hooks/useTitle";
// import getMediaPath from "../utility/getMediaPath";

const Movies = () => {
    let { key } = useGlobalContext();
    useTitle("Wahala || Movies");
    let {
        data: movies,
        loading,
        error,
    } = useInfiniteScrolling(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`
    );

    return (
        <>
            <section className="width" data-sec="media">
                {movies.length > 0 &&
                    movies.map((movie) => {
                        let { id, poster_path, title, vote_average } = movie;
                        let path = `/movies/${id}`;
                        return (
                            <Media
                                key={`${id}`}
                                img={poster_path}
                                alt={title}
                                path={path}
                                rate={vote_average}
                            />
                        );
                    })}
            </section>
            {loading && <LoadingIndicator />}
            {error && <div>{error.message || error}</div>}
        </>
    );
};

export default Movies;
