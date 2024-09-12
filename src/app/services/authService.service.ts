import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isuser: boolean = false;
  loggedUser(data: any): Observable<boolean> {
    const isAuthenticated =
      data.username === 'chandru' && data.password === '12345';
    this.isuser = true;
    // Return an Observable with the authentication result
    return of(isAuthenticated);
  }

  isAuthenticated(): boolean {
    return this.isuser;
  }
}
