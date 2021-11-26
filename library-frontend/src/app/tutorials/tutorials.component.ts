import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TutorialCallService } from '../api-services/tutorial-call.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  public videos: any = [];
  constructor(private videoService: TutorialCallService) { }

  ngOnInit(): void {
   this.getBooksFromServices();
  }

  getBooksFromServices() {
    var base = this;
    this.videoService.getVideos().subscribe((data:any) => {
      base.videos = data;
    }, error => {
      alert('user doesnt have access');
    });
  }
}
