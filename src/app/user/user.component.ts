import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor() {
    const result = ajax('https://jsonplaceholder.typicode.com/users')
      .pipe()
      .subscribe((res: any) => {
        console.log(res.response);
      });
  }
}
