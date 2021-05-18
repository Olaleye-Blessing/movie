import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/Movie";
import { useGlobalContext } from "../contexts/GlobalContext";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";

const TvShows = () => {
    let { key } = useGlobalContext();
    let {
        data: tvshows,
        loading,
        error,
    } = useInfiniteScrolling(
        `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US`
    );
    return (
        <>
            <section className="media width">
                {tvshows.length > 0 &&
                    tvshows.map((tv) => {
                        let { id, poster_path, name } = tv;
                        return (
                            <Media key={`${id}`} img={poster_path} alt={name} />
                        );
                    })}
            </section>
            {loading && <LoadingIndicator />}
            {error && <div>{error.message || error}</div>}
        </>
    );
};

export default TvShows;
