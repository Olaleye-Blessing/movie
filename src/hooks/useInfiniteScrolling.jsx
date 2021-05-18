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
        // checkScroll
        if (checkScroll()) {
            setPage((page) => page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            console.log("remove scrolling function(unmount)...");
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let abortFetch = new AbortController();
    let signal = abortFetch.signal;
    useEffect(() => {
        setLoading(true);
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
                    setError(fetchedData.message);
                }
            })
            .catch((err) => {
                console.log("catching error in catch");
                console.log(err);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, pathUrl]);

    useEffect(() => {
        setData([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathUrl]);

    return { data, loading, error };
};

export default useInfiniteScrolling;
