import { Link } from "react-router-dom";

const Slider = ({ items }) => {
    return (
        <div className="marquee">
            <div className="marquee-cont animate">
                <div className="marquee--inner">
                    {items.map((item) => {
                        return (
                            <Link
                                to={item.path}
                                key={item.id}
                                className="marquee__link"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="marquee--inner">
                    {items.map((item) => {
                        return (
                            <Link
                                to={item.path}
                                key={item.id}
                                className="marquee__link"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Slider;
