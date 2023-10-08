import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress1 = 50;
  progress2 = 50;
  get getPercentage1() {
    return `${this.progress1}%`;
  }
  get getPercentage2() {
    return `${this.progress2}%`;
  }
}
