import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api-services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userData:any;
  constructor(private router: Router, private authService: AuthService) {
    this.userData = {};
  }

  ngOnInit(): void {
  }

  register() {
    var base = this;
    this.authService.register(this.userData).subscribe((data: any) => {
      sessionStorage.setItem('authToken', data.token);
      console.log(data);
      base.authService.sendLoginEvent();
      base.router.navigateByUrl('/');
    });
  }

  changeToLogin() {
   this.authService.sendRegisterEvent();
  } 

}
