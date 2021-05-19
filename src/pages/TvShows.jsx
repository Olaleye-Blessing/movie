import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/MediaBox";
import Slider from "../Components/Slider";
import { useGlobalContext } from "../contexts/GlobalContext";
import useFetch from "../hooks/useFetch";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";
import useTitle from "../hooks/useTitle";

const TvShows = () => {
    let { key, baseUrl } = useGlobalContext();
    useTitle("Wahala || TvShow");
    let {
        data: tvshows,
        loading,
        error,
    } = useInfiniteScrolling(
        `${baseUrl}/tv/popular?api_key=${key}&language=en-US`
    );

    const { data: genresObj } = useFetch(
        `${baseUrl}/genre/tv/list?api_key=${key}&language=en-US`
    );

    let { genres } = genresObj;

    let newGenres =
        genres &&
        genres.map((genre) => {
            let { id } = genre;
            let path = `${baseUrl}/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
            return { ...genre, path };
        });

    return (
        <>
            {newGenres && <Slider items={newGenres} />}
            <section className="width" data-sec="media">
                {tvshows.length > 0 &&
                    tvshows.map((tv) => {
                        let { id, poster_path, name, vote_average } = tv;
                        let path = `/tv/${id}`;
                        return (
                            <Media
                                key={`${id}`}
                                img={poster_path}
                                alt={name}
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

export default TvShows;
