import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() showChange = new EventEmitter<boolean>();

  set show(val) {
    if (val !== this.show) {
      this._show = val;
      this.showChange.emit(val);
      if (val) {
        setTimeout(this.setListener.bind(this), 500);
      } else {
        this.removeListener();
      }
    }
  }

  @Input()
  get show() {
    return this._show;
  }


  constructor(el: ElementRef) {
    this.ref = el.nativeElement;
    this.mouseListener = this.mouseListener.bind(this);
  }

  ref;

  private _show = false;

  private mouseListener = (e: any) => {
    e.preventDefault();

    if (!e.path.includes(this.ref)) {
      this.show = false;
    }
  }

  setListener() {
    window.addEventListener('click', this.mouseListener);
  }

  removeListener() {
    window.removeEventListener('click', this.mouseListener);
  }

}
