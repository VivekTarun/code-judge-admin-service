class BaseError extends Error {
    constructor(name, statusCode, description, detail) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.detail = detail;

        Error.captureStackTrace(this);
    }
}


module.exports = BaseError;