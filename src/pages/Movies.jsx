import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/MediaBox";
// import Slider from "../Components/Slider";
import { useGlobalContext } from "../contexts/GlobalContext";
// import useFetch from "../hooks/useFetch";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";
import useTitle from "../hooks/useTitle";
// import getMediaPath from "../utility/getMediaPath";

const Movies = () => {
    useTitle("Wahala || Movies");

    let { key, baseUrl } = useGlobalContext();

    let {
        data: movies,
        loading,
        error,
    } = useInfiniteScrolling(
        `${baseUrl}/movie/popular?api_key=${key}&language=en-US`
    );

    // const { data: genresObj } = useFetch(
    //     `${baseUrl}/genre/movie/list?api_key=${key}&language=en-US`
    // );

    // let { genres } = genresObj;

    // let newGenres =
    //     genres &&
    //     genres.map((genre) => {
    //         let { id } = genre;
    //         let path = `${baseUrl}/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
    //         return { ...genre, path };
    //     });

    return (
        <>
            {/* {newGenres && <Slider items={newGenres} />} */}
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
