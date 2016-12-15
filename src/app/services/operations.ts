export class NmcOperations {

  public getParams(): any {
    return {"101":"010100027","PARAM":{"127.14":"PORTAL"}};
  }

  public login(email: string, password: string): any {
    return {"101":"050400121","PARAM":{"114.7":email, "52":password}};
  }

}
