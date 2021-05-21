import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Gallery = ({
    items,
    responsive,
    animationDuration,
    autoPlayInterval,
}) => {
    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            animationDuration={animationDuration}
            responsive={responsive}
            items={items}
            autoPlay
            animationEasingFunction="linear"
            autoPlayInterval={autoPlayInterval}
        />
    );
};
export default Gallery;
