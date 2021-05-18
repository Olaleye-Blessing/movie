const checkScroll = () => {
    console.log("scrolling");
    // document bottom
    let windowRelativeBottom =
        document.documentElement.getBoundingClientRect().bottom;
    let visibleHeight = document.documentElement.clientHeight;

    return windowRelativeBottom - visibleHeight < 100;
    // if (windowRelativeBottom - visibleHeight < +100)
    //     setPage((page) => page + 1);
};

export { checkScroll };
