import { Component, OnInit } from '@angular/core';
import { AuthService } from './api-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public showLogin: boolean = true; 
  title = 'frontend';

  constructor(private authService: AuthService) {
    var base = this;
    this.authService.loginSubject.subscribe((data: any) => {
      debugger;
      if(data.login) {
        base.showLogin = false;
      }
    });
  }
  ngOnInit(): void {
    var token = sessionStorage.getItem('authToken');

    if (token != null && token != '' && token != undefined) {
      this.showLogin = false;
    }
  }
  logout() {
    sessionStorage.clear();
    this.showLogin = true;
  }
}
