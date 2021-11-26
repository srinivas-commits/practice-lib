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
  public searchvideos: any = [];
  public resultofsearch: any = [];
  public searchcourse: any;
  constructor(private videoService: TutorialCallService) { }

  ngOnInit(): void {
   this.getBooksFromServices();
  }

  getBooksFromServices() {
    var base = this;
    this.videoService.getVideos().subscribe((data:any) => {
      base.videos = data;
      base.searchvideos = data;
    }, error => {
      alert('user doesnt have access');
    });
  }

  getBooksOnSearch() {
    this.searchvideos.array.forEach(item => {
      if (item['course'].toString().toLowerCase().indexOf(this.searchcourse.toLowerCase()) !== -1) {
        this.resultofsearch.push(item);
        console.log(this.resultofsearch);
      }
    });
  }
}
