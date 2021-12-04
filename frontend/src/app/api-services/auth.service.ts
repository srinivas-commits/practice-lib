import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = 'http://localhost:8080/api/users/';
  public loginSubject = new Subject<any>();
  public registerSubject = new Subject<any>();
  public userSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  login(data: any) {
    let url = 'http://localhost:8080/api/users/authorize';
    return this.http.post(url, data);
  }

  register(data: any) {
    let url = this.apiUrl;
    return this.http.post(url, data);
  }

  getUserData(data: any) {
    let url = 'http://localhost:8080/api/users/profile';
    return this.http.post(url, data);
  }

  sendLoginEvent() {
    this.loginSubject.next({login: true});
  }

  sendRegisterEvent() {
    this.registerSubject.next({register: true});
  }
}
