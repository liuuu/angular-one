import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div>{{title}}</div>
    <app-pm-products></app-pm-products>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-appp-app';
}
