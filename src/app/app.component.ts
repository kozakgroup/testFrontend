import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _show = false;

  get show() {
    return this._show;
  }

  set show(val) {
    this._show = val;
  }

  showSidebar(event) {
    this.show = event;
  }
}
