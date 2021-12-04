import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostalCallService } from '../api-services/hostal-call.service';
import { HostalDataService } from '../hostal-data.service';
import { UserAccessService } from '../user-access.service';

@Component({
  selector: 'app-hostals',
  templateUrl: './hostals.component.html',
  styleUrls: ['./hostals.component.css']
})
export class HostalsComponent implements OnInit {

  public showRole: boolean = false;
  constructor(private hostalCall: HostalCallService, private hostalData: HostalDataService , private router: Router, private userRole: UserAccessService) { 
    this.userAccessConfig();
  }

  public rows: any = [];

  public columns = [{
    name: 'block', displayName: 'Block Name', sort: true, search: true, placeholder: 'Search by block name',
    columnType: '', isEdit: false, width: ''
  },
  {
    name: 'hostalNo', displayName: 'Hostal No' , placeholder: 'Search by room no',
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: ''
  },
  {
    name: 'status', displayName: 'Status' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: ''
  },
  {
    name: 'studentId', displayName: 'Student ID' , placeholder: 'Search by student id', 
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: ''
  },
  {
    name: 'fromDate', displayName: 'from Date' ,
     sort: true, search: false, columnSearchValue: '', columnType: 'date', isEdit: false, width: ''
  },
  {
    name: 'toDate', displayName: 'to Date' ,
     sort: true, search: false, columnSearchValue: '', columnType: 'date', isEdit: false, width: ''
  },
  {
    name: 'roomCost', displayName: 'Cost' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: ''
  }
  ];

 
  editedData(event) {
    this.hostalData.setHostalData(event);
    this.router.navigateByUrl('/issueHostal');
  }

  deleteData(event) {
    this.hostalData.setHostalData(event);
    this.router.navigateByUrl('/issueHostal');
  }

  ngOnInit(): void {
    this.userAccessConfig();
    this.getHostalService();
  }

  userAccessConfig() {
    var access = sessionStorage.getItem('role').toString();
    if(access === 'admin') {
      this.showRole = true;
    } else if (access === 'student') {
      this.showRole = false;
    } 
  }

  getHostalService() {
    this.hostalCall.getHostals().subscribe(data => {
      this.rows = data;
    });
  }

  addHostalRoom() {
    this.router.navigateByUrl('/addHostal');
  }
}
