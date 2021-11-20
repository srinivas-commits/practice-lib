import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostalCallService } from '../api-services/hostal-call.service';
import { HostalDataService } from '../hostal-data.service';

@Component({
  selector: 'app-hostals',
  templateUrl: './hostals.component.html',
  styleUrls: ['./hostals.component.css']
})
export class HostalsComponent implements OnInit {

  constructor(private hostalCall: HostalCallService, private hostalData: HostalDataService , private router: Router) { }

  public rows: any = [];

  public columns = [{
    name: 'block', displayName: 'Block Name', sort: true, search: true, placeholder: 'Search by block name',
    columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'hostalNo', displayName: 'Hostal No' , placeholder: 'Search by room no',
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'status', displayName: 'Status' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'studentId', displayName: 'Student ID' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'fromDate', displayName: 'from Date' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'toDate', displayName: 'to Date' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'roomCost', displayName: 'Cost' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
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
    this.getHostalService();
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
