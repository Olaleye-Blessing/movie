import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/Movie";
import { useGlobalContext } from "../contexts/GlobalContext";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";

const Movies = () => {
    let { key } = useGlobalContext();
    let {
        data: movies,
        loading,
        error,
    } = useInfiniteScrolling(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`
    );

    return (
        <>
            <section className="media width">
                {movies.length > 0 &&
                    movies.map((movie) => {
                        let { id, poster_path, title } = movie;
                        return (
                            <Media
                                key={`${id}`}
                                img={poster_path}
                                alt={title}
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
