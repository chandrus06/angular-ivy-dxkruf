import {
  AfterViewInit,
  Component,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
// import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  price: number = 10050.4521;

  ngOnInit(): void {}

  emittedData(e: any) {
    console.log(e);
  }
}
