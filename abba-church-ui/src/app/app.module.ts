import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarlboroComponent } from './marlboro/marlboro.component';
import { NewHopeComponent } from './new-hope/new-hope.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { DonationsComponent } from './donations/donations.component';
import { HomeComponent } from './home/home.component';
import { LanguageService } from './services/language.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { MailService } from './services/mail.service';
import { AccountComponent } from './account/account.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from './services/account.service';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';


@NgModule({
  declarations: [
    AppComponent,
    MarlboroComponent,
    NewHopeComponent,
    LoginComponent,
    AdminComponent,
    MembershipRegistrationComponent,
    HomeComponent,
    AboutUsComponent,
    AccountComponent,
    DonationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    LanguageService,
    MailService,
    AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
