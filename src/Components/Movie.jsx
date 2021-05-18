import { Link } from "react-router-dom";
// import Logo from "./../images/test.jpg";

let baseUrl = `https://image.tmdb.org/t/p/w500`;
const Media = ({ img, alt }) => {
    return (
        <figure>
            <Link to="/">
                <img src={`${baseUrl}/${img}`} alt={alt} />
            </Link>
        </figure>
    );
};

export default Media;
