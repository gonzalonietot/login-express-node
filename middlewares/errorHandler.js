class ErrorHandler {
    constructor(statusCode, message) {
        this.statusCode = statusCode
        this.message = message
    }

    error (err, res) {
        const { statusCode, message } = err
        res.status(statusCode).json({
            status: this.statusCode,
            message: this.message
        })
    }
}

module.exports = ErrorHandler;