import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarlboroComponent } from './marlboro/marlboro.component';
import { NewHopeComponent } from './new-hope/new-hope.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { HomeComponent } from './home/home.component';
import { LanguageService } from './services/language.service';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent, 
    MarlboroComponent, 
    NewHopeComponent, 
    LoginComponent, 
    AdminComponent,
    MembershipRegistrationComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthenticationService, AuthGuardService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
