import { Component, ChangeDetectionStrategy } from '@angular/core';
import {User} from "../models/user";


@Component({
  selector: 'nmc-user-info',
  styleUrls: ['../css/cards.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Welcome {{user.firstName}} {{user.lastName}}</md-card-title>
      <md-card-content>
        <p>Hey! This is user info</p>
      </md-card-content>
    </md-card>
  `
})
export class UserInfoComponent {
  user : User
  constructor() {
     this.user = JSON.parse(localStorage.getItem("currentUser"))
  }

}
