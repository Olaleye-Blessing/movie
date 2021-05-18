import LoadingIndicator from "../Components/LoadingIndicator";
import Media from "../Components/MediaBox";
import { useGlobalContext } from "../contexts/GlobalContext";
import useInfiniteScrolling from "../hooks/useInfiniteScrolling";

const People = () => {
    let { key } = useGlobalContext();
    let {
        data: people,
        loading,
        error,
    } = useInfiniteScrolling(
        `https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US`
    );
    return (
        <>
            <section className="media width">
                {people.length > 0 &&
                    people.map((person) => {
                        let { id, profile_path, name } = person;
                        return (
                            <Media
                                key={`${id}`}
                                img={profile_path}
                                alt={name}
                                type="person"
                            />
                        );
                    })}
            </section>
            {loading && <LoadingIndicator />}
            {error && <div>{error.message || error}</div>}
        </>
    );
};

export default People;
