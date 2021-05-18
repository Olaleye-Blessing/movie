import { useParams } from "react-router";

const Movie = () => {
    let { id } = useParams();

    return <div>Movie Page -- {id}</div>;
};

export default Movie;
