import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-item',
  templateUrl: './big-item.component.html',
  styleUrls: ['./big-item.component.scss']
})
export class BigItemComponent {
  @Input() data;
}
