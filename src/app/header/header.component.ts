import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showSidebar = new EventEmitter<boolean>();

  private menuData;

  constructor() { }

  ngOnInit() {
    this.menuData = [
      { icon: 'help', notificationsCount: 0 },
      { icon: 'notifications', notificationsCount: 12 },
      { icon: 'mail', notificationsCount: 5 }
    ];
  }

  handleSidebar() {
    this.showSidebar.emit(true);
  }

}
