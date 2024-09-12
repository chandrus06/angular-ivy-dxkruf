import { Component, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
})
export class SampleComponent {
  // message = new Subject();

  message = 'child Message';

  obs$ = new Observable((elem) => elem.next(Math.random()));

  @Output() child: EventEmitter<string> = new EventEmitter();
  constructor() {
    // this.getData();
  }

  onBtnClick() {
    // this.message.subscribe('child Message')
    this.child.emit(this.message);
  }
}
