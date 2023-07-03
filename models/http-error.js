class HttpError extends Error {
  constructor (message, errorCode) {
    super(mesaage)
    this.code = errorCode
  }
}
module.exports = HttpError
