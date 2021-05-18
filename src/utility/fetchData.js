const fetchData = async (url, signal) => {
    try {
        let req = await fetch(url, { signal });
        if (!req.ok) throw new Error("not found");
        let data = await req.json();
        return { status: "success", data };
    } catch (error) {
        return { status: "fail", message: error.message, name: error.name };
    }
};

export { fetchData };
