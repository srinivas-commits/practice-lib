import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostalCallService {
  public apiUrl = 'http://localhost:8080/api/hostal/';
  constructor(private http: HttpClient) { }

  getHostals() {
    let url = this.apiUrl;
    return this.http.get(url);
  }

  accomodateHostal(data: any) {
    let url = this.apiUrl;
    url = url.concat(data.id);
    return this.http.put(url, data);
  }
}
