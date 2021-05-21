import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Gallery = ({ items }) => {
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
        1024: {
            items: 6,
        },
    };

    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    );
};
export default Gallery;
