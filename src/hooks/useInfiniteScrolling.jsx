import { useEffect, useState } from "react";
import { checkScroll } from "../utility/checkScroll";
import { fetchData } from "../utility/fetchData";

const useInfiniteScrolling = (pathUrl) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(false);

    let url = `${pathUrl}&page=${page}`;

    const handleScroll = () => {
        //? increase the page number if true(if the user is 100px away from document's bottom)
        if (checkScroll()) {
            setPage((page) => page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        //? remove effect when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let abortFetch = new AbortController();
    let signal = abortFetch.signal;
    useEffect(() => {
        setLoading(true);
        setError(false);
        if (totalPages === 0) {
            setLoading(false);
            setError("not found");
            return;
        }
        if (page > totalPages) {
            setLoading(false);
            setError("no more data");
            return;
        }
        fetchData(url, signal)
            .then((fetchedData) => {
                if (fetchedData.status === "success") {
                    let { data: result } = fetchedData;
                    let { results, total_pages } = result;
                    setData((old) => [...new Set([...old, ...results])]);
                    setLoading(false);
                    setTotalPages(total_pages);
                }
                if (fetchedData.status === "fail") {
                    console.log("then fail ....");
                    setLoading(false);
                    setError(fetchedData.message);
                }
            })
            .catch((err) => {
                console.log("catching error in catch");
                console.log(err);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, pathUrl]);

    //! WAHALA!!
    //? set all data to empty array if the url chnages. This is particularly useful for form query
    //? set totalPages back to 1 so that search could start all over. also peculiar to form query
    useEffect(() => {
        setData([]);
        setTotalPages(1);
        // setLoading(false);
        // setError("not found");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathUrl]);

    // useEffect(() => {
    //     setLoading(false);
    //     setError("not found");

    // }, [input])

    return { data, loading, error };
};

export default useInfiniteScrolling;
