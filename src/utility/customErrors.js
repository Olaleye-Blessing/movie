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

export { NotFound };
