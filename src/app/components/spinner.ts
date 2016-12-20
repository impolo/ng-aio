import {Component, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'nmc-spinner',
  template: `
    <md-progress-circle *ngIf=visible mode="indeterminate"></md-progress-circle>
  `,
  inputs:['visible']
})
export class SpinnerComponent {
}
