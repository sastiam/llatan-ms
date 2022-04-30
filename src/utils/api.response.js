

function ApiFailResponse(message, status) {
    this.message = message;
    this.status = status;
}

module.exports = {
    ApiFailResponse
}