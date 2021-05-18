import { Link } from "react-router-dom";
import notFound from "./../images/404.jpg";

let baseUrl = `https://image.tmdb.org/t/p/w500`;
const Media = ({ img, alt, type }) => {
    let imgSrc = img ? `${baseUrl}/${img}` : notFound;

    return (
        <figure>
            <Link to="/">
                <img src={imgSrc} alt={alt} />
            </Link>
            {type === "person" && (
                <span
                    style={{
                        textAlign: "center",
                        display: "inline-block",
                        width: "100%",
                    }}
                >
                    {alt}
                </span>
            )}
        </figure>
    );
};

Media.defaultProps = {
    type: "",
};

export default Media;
