import {Param} from "../models/param";
import {User} from "../models/user";
import {UserError} from "../models/user_error";
export class Extractors {

  static param(objects: any[]): Param[] {
    return objects.map(obj => new Param(obj["127.11"], obj["127.12"]))
  }

  static user(objects: any[]): User {
    return objects.map(obj => {
      let user = new User()
      user.firstName = obj["114.3"]
      user.lastName = obj["114.5"]
      user.userId = obj["53"]
      return user
    })[0]
  }

  static userError(msg): UserError {
    return new UserError(msg)
  }

}
