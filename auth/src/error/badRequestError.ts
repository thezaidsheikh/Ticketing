import { CustomError } from './customError'

export class BadRequestError extends CustomError {
  statusCode = 400
  constructor(public message: string) {
    super(message)
    // Only because we are extending built in class
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }
  // structure the error
  serializeErrors() {
    return [{ message: this.message }]
  }
}
