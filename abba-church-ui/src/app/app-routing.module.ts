import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarlboroComponent } from './marlboro/marlboro.component';
import { NewHopeComponent } from './new-hope/new-hope.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { HomeComponent } from './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: 'marlboro',
    component: MarlboroComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuardService],
    pathMatch: 'prefix'
  },
  {
    path: 'new-hope',
    component: NewHopeComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'prefix'
  },
  {
      path: 'donations',
      component: DonationsComponent,
      pathMatch: 'prefix'
    },
  {
      path: 'logout',
      component: LogoutComponent,
      pathMatch: 'prefix'
    },
    {
      path: 'membership',
      component: MembershipRegistrationComponent,
      pathMatch: 'prefix'
    },
    {
      path: 'home',
      component: HomeComponent,
      pathMatch: 'prefix'
    },
    {
      path: 'about-us',
      component: AboutUsComponent,
      pathMatch: 'prefix'
    },
     {
          path: 'account',
          component: AccountComponent,
          pathMatch: 'prefix'
     },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
