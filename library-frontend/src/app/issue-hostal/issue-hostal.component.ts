import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostalCallService } from '../api-services/hostal-call.service';
import { HostalDataService } from '../hostal-data.service';

@Component({
  selector: 'app-issue-hostal',
  templateUrl: './issue-hostal.component.html',
  styleUrls: ['./issue-hostal.component.css']
})
export class IssueHostalComponent implements OnInit {

  public hostalData:any;
  constructor(private hostalDataService: HostalDataService, private hostalCallService: HostalCallService, private router: Router) { 
    this.hostalData = {};
  }

  ngOnInit(): void {
    this.hostalData = this.hostalDataService.getHostalData();
  }

  accomodate() {
    var base = this;
    this.hostalData.status = 'alloted';
    this.hostalCallService.accomodateHostal(this.hostalData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/hostalManage');
    });
  }

  deaccomodate() {
    var base = this;
    this.hostalData.status = 'available';
    this.hostalData.studentId = null;
    this.hostalData.fromDate = null;
    this.hostalData.toDate = null;
    this.hostalCallService.accomodateHostal(this.hostalData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/hostalManage');
    });
  }

}
