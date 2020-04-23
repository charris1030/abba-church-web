import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  language: string;
  username = 'admin';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.language = 'pt-br';
  }

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  createNewAccount() {
    this.router.navigate(['/account', { action: 'new' }]);
  }

}
