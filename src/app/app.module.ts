import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.route.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './canActivate.guard';
import { AuthService } from './services/authService.service';
import { UserComponent } from './user/user.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HelloComponent,
    SampleComponent,
  ],
  providers: [AuthService, LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
