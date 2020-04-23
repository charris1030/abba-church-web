import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

  language: string;
  action: string = 'new';
  user: User = new User();

  constructor(private router: Router,
    private route: ActivatedRoute) {
      let action = this.route.snapshot.paramMap.get('action');
      this.action = action;
  }

  ngOnInit() {
      this.language = 'pt-br';
  }

}
