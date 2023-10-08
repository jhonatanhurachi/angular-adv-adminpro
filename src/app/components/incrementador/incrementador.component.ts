import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent {
  @Input('value') progress = 0;
  @Input() btnClass = 'btn btn-primary';
  @Output() valueChange = new EventEmitter<number>();
  get getPercentage() {
    return `${this.progress}%`;
  }
  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      this.valueChange.emit(this.progress);
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.valueChange.emit(this.progress);
      return;
    }
    this.progress += value;
    this.valueChange.emit(this.progress);
  }
  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valueChange.emit(this.progress);
  }
}
