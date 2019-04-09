import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-invest-block',
  templateUrl: './invest-block.component.html',
  styleUrls: ['./invest-block.component.scss']
})
export class InvestBlockComponent implements OnInit {
  @Input() progress = 0;
  @Input() available = 0;

  constructor() { }

  ngOnInit() { }

  get right() {
    return Math.abs(100 - this.progress);
  }

}
