import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api-services/auth.service';
import { UserAccessService } from '../user-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userProfile: any;
  public userNameParam: any;
  constructor( private router: Router, private userRole: UserAccessService , private authService: AuthService ) {   
    this.userNameParam = {};
    this.getProfile();
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    console.log(sessionStorage.getItem('user'));
    this.userNameParam.username = sessionStorage.getItem('user');
    var base = this;
    this.authService.getUserData(this.userNameParam).subscribe((data: any) => {
      base.userProfile = data;
      console.log(data);
    });
  }

  libraryClicked() {
    this.router.navigateByUrl('/librarybooks');
  }

  hostalManagementClicked() {
    this.router.navigateByUrl('/hostalManage');
  }

  videoLecturesClicked() {
    this.router.navigateByUrl('/tutorials');
  }
}
