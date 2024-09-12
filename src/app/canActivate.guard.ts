import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/authService.service';
import { Subject } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  pageName: string;
  constructor(private authservice: AuthService, private router: Router) {}
  sub$ = new Subject();

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.getPageName();
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isAuthenticated();
    if (logged) {
      return true;
    }
    this.getPageName();

    // alert('You must login to the system to access the page.!');
    return false;
  }

  getPageName(): void {
    const url = this.router.url;
    const segments = url.split('/');
    console.log(segments);
    this.pageName = segments[segments.length - 1];
    console.log('Page Name:', this.pageName);
    this.router.navigate([`/${this.pageName}`]);
  }
}
