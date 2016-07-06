import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router } from '@angular/router';
import { Authentication } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  constructor(public auth: Authentication, public router: Router) {

  }

  onSubmit() {
    this.auth.login(this.username, this.password)
      .subscribe( (token: any) => this.router.navigate(['/home']));
  }

  ngOnInit() {
  }

}
