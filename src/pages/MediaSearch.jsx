import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/MediaBox";
import { useGlobalContext } from "../contexts/GlobalContext";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";

// https://api.themoviedb.org/3/search/multi?api_key=651ef57b1ca582995fef27ff08df6717&language=en-US&query=Nikita&page=1&include_adult=true
// fetch(pathUrl)
//     .then((res) => {
//         if (!res.ok) throw new Error("not found");
//         return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     });
const MediaSearch = () => {
    let { searchQuery, key } = useGlobalContext();
    let pathUrl = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${searchQuery}&include_adult=true`;
    console.log(searchQuery);

    let { data: allMedia, loading, error } = useInfiniteScrolling(pathUrl);

    return (
        <section className="width">
            <section className="width" data-sec="media">
                {allMedia.length > 0 &&
                    allMedia.map((media) => {
                        let {
                            id,
                            poster_path,
                            profile_path,
                            name,
                            title,
                            media_type,
                            popularity,
                            vote_average,
                        } = media;
                        let path =
                            media_type === "person"
                                ? `/person/${id}`
                                : media_type === "tv"
                                ? `/tv/${id}`
                                : `/movies/${id}`;
                        return (
                            <Media
                                key={`${id}`}
                                img={poster_path || profile_path}
                                alt={title || name}
                                path={path}
                                rate={vote_average || popularity}
                                type={media_type === "person" && "person"}
                            />
                        );
                    })}
            </section>
            {loading && <LoadingIndicator />}
            {error && <div>{error.message || error}</div>}
        </section>
    );
};

export default MediaSearch;
