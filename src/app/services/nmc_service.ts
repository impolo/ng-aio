import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx'
import {NmcRequest} from './nmc_request'
import {NmcOperations} from "./operations";
import any = jasmine.any;
import {Observable} from "rxjs";
import {Param} from "../models/param";
import {Extractors} from "./extractors";
import {User} from "../models/user";


@Injectable()
export class NmcService {

  //temporally
  API_PATH = "http://8.41.42.131:6040/NmcServerS/nmc-server/post/"

  constructor(private http: Http) {
  }

  getParams(): Observable<Param[]> {
    let nmcRequest = new NmcRequest()
    nmcRequest.OPTLST.push(this.operations.getParams())

    return this.http.post(this.API_PATH, this.body(nmcRequest), this.headers)
      .map(res => Extractors.param(res.json().RESULT[0].RESULT))

  }

  login(email: string, password: string): Observable<User> {
    let nmcRequest = new NmcRequest()
    nmcRequest.OPTLST.push(this.operations.login(email, this.toHex(password)))

    return this.http.post(this.API_PATH, this.body(nmcRequest), this.headers)
      .map(res => {
        return this.ok(res.json().RESULT[0]) ?
          Extractors.user(res.json().RESULT[0].RESULT): Extractors.userError(res.json().RESULT[0]["44"]) })

  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  operations = new NmcOperations()

  public body(body: NmcRequest): any {
    return window.btoa(JSON.stringify(body))
  }

  public headers(): Headers {
    let headers = new Headers();
    headers.append("Accept", "text/plain")
    headers.append("Accept-Charset", "utf-8")
    return headers
  }

  toHex(str) {
    var hex = '';
    for (var i = 0; i < str.length; i++) {
      hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
  }

  ok (res: any): boolean {
    return res["44"] == "Transaction Approved"
  }


}
