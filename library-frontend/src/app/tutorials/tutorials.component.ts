import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TutorialCallService } from '../api-services/tutorial-call.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  public videos: any = [];
  public resultofsearch: any = [];
  public searchcourse: any;
  constructor(private videoService: TutorialCallService, private router: Router) { }

  ngOnInit(): void {
   this.getBooksFromServices();
  }

  getBooksFromServices() {
    var base = this;
    this.videoService.getVideos().subscribe((data:any) => {
      base.videos = data;
      base.resultofsearch = data;
    }, error => {
      alert('user doesnt have access');
    });
  }

  getBooksOnSearch() {
    this.resultofsearch = [];
    this.videos.forEach(item => {
      if (item['course'].toString().toLowerCase().indexOf(this.searchcourse.toLowerCase()) !== -1) {
        this.resultofsearch.push(item);
        console.log(this.resultofsearch);
      }
    });
  }

  addNewVideo() {
    this.router.navigateByUrl('/addVideo');
  }
}
