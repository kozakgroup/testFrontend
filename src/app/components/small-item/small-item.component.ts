import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-item',
  templateUrl: './small-item.component.html',
  styleUrls: ['./small-item.component.scss']
})
export class SmallItemComponent {
  @Input() data;

  get getButtonType() {
    switch (this.data.status) {
      case 'close':
        return 'completed';
      case 'waiting':
        return 'pre';
      default:
        return 'details';
    }
  }

  getLogo() {
    return this.data.images ? `http://${this.data.images[0].url}` : '/assets/big-house.jpg';
  }

  getProgress() {
    if (!isNaN(+this.data.progress)) {
      return this.data.progress;
    }
    return 100;
  }
}
