class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class NotFound extends MyError {
    // constructor(message) {
    //     super("Resource Not found");
    // }
}

class NetWork extends MyError {
    constructor(message) {
        super(message);
        this.message = "Network Issue! Pls check your network connection";
    }
}

export { NotFound, NetWork };
