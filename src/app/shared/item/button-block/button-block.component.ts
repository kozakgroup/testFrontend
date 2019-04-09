import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss']
})
export class ButtonBlockComponent {
  @Input() radius = 0;
  @Input() type = 'details';

  constructor() { }

  isDetails() {
    return this.type === 'details';
  }

  isPre() {
    return this.type === 'pre';
  }

  isCompleted() {
    return this.type === 'completed';
  }

}
