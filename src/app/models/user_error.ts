import {User} from "./user";
export class UserError extends User {

  errorMessage: string

  constructor(errorMessage) {
    super()
    this.errorMessage = errorMessage
  }
}
