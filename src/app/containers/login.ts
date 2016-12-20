import {Component, Input} from '@angular/core';
import {User} from "../models/user";
import {NgForm, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VALID} from "@angular/forms/src/model";
import {NmcService} from "../services/nmc_service";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";


@Component({
  selector: 'nmc-login',
  styleUrls: ['../css/cards.css'],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <section class="form-block">
      <md-card>
        <md-card-title>Please login</md-card-title>
 
        <md-card-content>
          <input placeholder="Email" type="email"  size="45"  
             name="email"
             type="email"
             formControlName="email"
             >
        </md-card-content>
        <md-card-content>
          <input placeholder="Password" type="password"  size="45"              
             type="password"
             formControlName="password">
        </md-card-content>
        
        <md-card-content>
          <button md-raised-button color="primary" [disabled]="!loginForm.valid" >
            Login
          </button>
        </md-card-content>
         <md-card-content>
           <nmc-spinner [visible]=loading > </nmc-spinner>
        </md-card-content>
      </md-card>
      </section>
   </form>  `,
  providers: [NmcService, MdSnackBar]

})
export class LoginComponent {

  loading = false
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ds: NmcService, private router: Router, private snackBar: MdSnackBar) {
    this.loginForm = formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'password': ['', Validators.required]

    });
  }

  onSubmit() {
    if (this.loginForm.status == VALID) {
      this.loading = true;

      this.ds.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
        .subscribe(
          data => {
            if (data instanceof ErrorObservable) {
              this.snackBar.open(data.error)
              this.loading = false
              return
            }
            localStorage.setItem("currentUser", JSON.stringify(data))
            this.router.navigate(["/storeInfo"])
            this.loading = false
          },
          error => {
            this.snackBar.open(error)
            this.loading = false
          })

    }
  }

}
