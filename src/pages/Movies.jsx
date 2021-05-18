import { useEffect, useState } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/Movie";
import { useGlobalContext } from "../contexts/GlobalContext";
import { checkScroll } from "../utility/checkScroll";
import { fetchData } from "../utility/fetchData";

const Movies = () => {
    let { key } = useGlobalContext();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handleScroll = () => {
        // checkScroll
        if (checkScroll()) {
            setPage((page) => page + 1);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            console.log("remove scrolling function...");
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        let abortFetch = new AbortController();
        let signal = abortFetch.signal;
        setLoading(true);
        fetchData(
            `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`,
            signal
        ).then((fetchedData) => {
            if (fetchedData.status === "success") {
                let { data: result } = fetchedData;
                let { results } = result;
                let newData = results.map((data) => {
                    let { id, poster_path, title } = data;
                    return { id, poster_path, title };
                });
                setMovies((old) => [...old, ...newData]);
                setLoading(false);
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <>
            <section className="media width">
                {movies.length > 0 &&
                    movies.map((movie) => {
                        let { id, poster_path, title } = movie;
                        return (
                            <Media
                                key={`${id}${title}`}
                                img={poster_path}
                                alt={title}
                            />
                        );
                    })}
                {loading && <LoadingIndicator />}
            </section>
        </>
    );
};

export default Movies;
