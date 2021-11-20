import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userData:any;
  constructor(private router: Router, private authService: AuthService) { 
    this.userData = {};
  }

  ngOnInit(): void {
  }

  login() {
    var base = this;
    this.authService.login(this.userData).subscribe((data: any) => {
      sessionStorage.setItem('authToken', data.token);
      console.log(data);
      base.authService.sendLoginEvent();
      base.router.navigateByUrl('/');
    });
  }
  changeToRegister() {
    this.router.navigateByUrl('register');
  }
}
