import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksCallService } from '../api-services/books-call.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  public booksData:any;
  constructor(private bookdata: DataService, private booksService: BooksCallService, private router: Router) { 
    this.booksData = {};
  }

  ngOnInit(): void {
    this.booksData = this.bookdata.getBooksData();
  }

  issue() {
    var base = this;
    this.booksData.status = 'issued';
    this.booksService.issueBooks(this.booksData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/librarybooks');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/librarybooks');
    });
  }

  returnBook() {
    var base = this;
    this.booksData.status = 'available';
    this.booksData.issuedtoStudent = null;
    this.booksService.issueBooks(this.booksData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/librarybooks');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/librarybooks');
    });
  }
}
