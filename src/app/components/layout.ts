import { Component } from '@angular/core';


@Component({
  selector: 'nmc-layout',
  template: `
    <md-sidenav-layout fullscreen>
      
      <ng-content></ng-content>

    </md-sidenav-layout>
  `,
  styles: [`
    md-sidenav-layout {
      background: rgba(0, 0, 0, 0.03);
      justify-content: ;
    }    
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `]
})
export class LayoutComponent { }
