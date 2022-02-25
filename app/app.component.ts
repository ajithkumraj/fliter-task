import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  today: Date = new Date();

  // Date: Date;

  constructor() {
    setInterval(() => {
      this.today = new Date();
    });
  }
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  evenfilter() {
    this.numbers = this.numbers.filter((x) => x % 2 ==0);
  }
}
