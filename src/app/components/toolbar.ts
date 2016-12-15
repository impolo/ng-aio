import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'nmc-toolbar',
  template: `
    <md-toolbar color="primary">
      <ng-content></ng-content>
    </md-toolbar>
  `
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
