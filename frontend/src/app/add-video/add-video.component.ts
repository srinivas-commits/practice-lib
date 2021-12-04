import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialCallService } from '../api-services/tutorial-call.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  public newVideo: any;
  constructor(private tutorialService: TutorialCallService, private router: Router) {
    this.newVideo = {};
  }

  ngOnInit(): void {
  }

  addNewVideo() {
    var base = this;
    this.tutorialService.addVideo(this.newVideo).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/tutorials');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/tutorials');
    });
  }

}
