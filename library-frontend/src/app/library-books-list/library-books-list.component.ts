import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksCallService } from '../api-services/books-call.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-library-books-list',
  templateUrl: './library-books-list.component.html',
  styleUrls: ['./library-books-list.component.css']
})
export class LibraryBooksListComponent implements OnInit {

  constructor(private bookService: BooksCallService, private data: DataService, private router: Router) { }

  public rows: any = [];

  public columns = [{
    name: 'title', displayName: 'Name', sort: true, search: true, placeholder: 'Search by book title',
    columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'status', displayName: 'Status' , placeholder: 'Search by value',
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'author', displayName: 'Author' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  }
  ];

  editedData(event) {
    this.data.setBooksData(event);
    this.router.navigateByUrl('/issuebooks');
  }

  deleteData(event) {
    this.data.setBooksData(event);
    this.router.navigateByUrl('/issuebooks');
  }

  ngOnInit(): void { 
    this.getBooksFromServices();
  }

  getBooksFromServices() {
    this.bookService.getBooks().subscribe(data => {
      this.rows = data;
    }, error => {
      alert('user doesnt have access');
    });
  }

}
