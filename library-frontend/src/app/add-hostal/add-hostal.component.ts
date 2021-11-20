import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostalCallService } from '../api-services/hostal-call.service';

@Component({
  selector: 'app-add-hostal',
  templateUrl: './add-hostal.component.html',
  styleUrls: ['./add-hostal.component.css']
})
export class AddHostalComponent implements OnInit {
  
  public newHostalRoom: any;
  
  constructor(private hostalService: HostalCallService, private router: Router) {
    this.newHostalRoom = {};
  }

  ngOnInit(): void {
  }

  addNewHostal() {
    this.newHostalRoom.status = 'available';
    this.newHostalRoom.studentId = null;
    this.newHostalRoom.toDate = null;
    this.newHostalRoom.fromDate = null;
    var base = this;
    this.hostalService.addHostalRoom(this.newHostalRoom).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/hostalManage');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/hostalManage');
    });
  }
}
