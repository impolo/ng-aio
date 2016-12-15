import {Component, Input} from '@angular/core';
import {User} from "../models/user";
import {NgForm, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VALID} from "@angular/forms/src/model";
import {NmcService} from "../services/nmc_service";
import {Router} from "@angular/router";
import {UserError} from "../models/user_error";
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'nmc-login',
  styleUrls: ['../css/cards.css'],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <md-card>
        <md-card-title>Please login</md-card-title>
 
        <md-card-content>
          <md-input placeholder="Email" type="email" 
             name="email"
             id="email"
             formControlName="email"
             ></md-input>
        </md-card-content>
        <md-card-content>
          <md-input placeholder="Password" type="password"              
             id="password"
             formControlName="password"></md-input>
        </md-card-content>
        
        <md-card-content>
          <button md-raised-button color="primary" >
            Login
          </button>
        </md-card-content>
         <md-card-content>
          <md-progress-circle *ngIf="loading" mode="indeterminate"></md-progress-circle>
        </md-card-content>
      </md-card>
   </form>  `,
  providers: [NmcService, MdSnackBar]

})
export class LoginComponent {

  loading = false
  loginError = false
  loginErrorMsg = ""

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
        .subscribe((data) => {

          if (data instanceof UserError) {
            this.snackBar.open(data.errorMessage);
          } else {
            localStorage.setItem("currentUser", JSON.stringify(data))
            this.router.navigate(["/user"])
          }
          this.loading = false
        })

    }
  }

}
