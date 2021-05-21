//? I dont know why I pass in signal here but it works. DON't TOUCH!!
const fetchData = async (url, signal) => {
    try {
        let req = await fetch(url, { signal });
        if (!req.ok) throw new Error("not found");
        let data = await req.json();
        return data;
        // return { status: "success", data };
    } catch (error) {
        throw error;
        // if (error.name !== "AbortError") {
        //     throw error;
        // }
        // return { status: "fail", message: error.message, name: error.name };
    }
};

export { fetchData };
