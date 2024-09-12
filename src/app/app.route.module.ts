import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';
import { LoginGuard } from './canActivate.guard';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'sample',
    component: SampleComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
