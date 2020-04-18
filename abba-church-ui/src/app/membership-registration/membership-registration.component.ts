import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-registration',
  templateUrl: './membership-registration.component.html',
  styleUrls: ['./membership-registration.component.scss']
})
export class MembershipRegistrationComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
