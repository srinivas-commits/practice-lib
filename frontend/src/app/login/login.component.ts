import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api-services/auth.service';
import { UserAccessService } from '../user-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userData: any;
  public showReg: boolean = false;

  constructor(private router: Router, private authService: AuthService, private userRole: UserAccessService) {
    this.userData = {};
    var base = this;
    this.authService.registerSubject.subscribe((data: any) => {
      if (data.register) {
        base.showReg = false;
      }
    });
  }

  ngOnInit(): void {
  }

  login() {
    var base = this;
    this.authService.login(this.userData).subscribe((data: any) => {
      sessionStorage.setItem('authToken', data.token);
      sessionStorage.setItem('user',data.username);
      sessionStorage.setItem('role',data.userRole);
      console.log(data);
      base.authService.sendLoginEvent();
      base.router.navigateByUrl('/');
    });
  }
  changeToRegister() {
    this.showReg = true;
  }
}
