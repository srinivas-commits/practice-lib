import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostalDataService {
  public hostalData: any;
  constructor() { }

  public getHostalData() {
    return this.hostalData;
  }

  public setHostalData(data: any) {
    this.hostalData = data;
  }
}
