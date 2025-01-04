import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // Another Way
  // template: '<h1>From TS File</h1>',
  // styles: ['h1{color:green}'],
})
export class AppComponent {
  title = 'lec1';
}
