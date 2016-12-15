import {Component, OnInit} from '@angular/core';
import {NmcService} from "../services/nmc_service"
@Component({
  selector: 'nmc-app',
  template: `<nmc-layout>
                <nmc-toolbar>
                AIO marketing CRM
                </nmc-toolbar>
                <router-outlet></router-outlet>
              </nmc-layout>`,
  providers: [NmcService]
})
export class AppComponent implements OnInit {

  constructor(private ds: NmcService) {
  }

  ngOnInit(): void {
    /*
     this.ds.getParams()
     .subscribe(
     (data) => console.log(data))*/
  }


}
