import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddHostalComponent } from './add-hostal/add-hostal.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { HomeComponent } from './home/home.component';
import { HostalsComponent } from './hostals/hostals.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { IssueHostalComponent } from './issue-hostal/issue-hostal.component';
import { LibraryBooksListComponent } from './library-books-list/library-books-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: 'addVideo', component: AddVideoComponent },
  { path: 'addHostal', component: AddHostalComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'issueHostal', component: IssueHostalComponent },
  { path: 'issuebooks', component: IssueBookComponent },
  { path: 'librarybooks', component: LibraryBooksListComponent },
  { path: 'hostalManage', component: HostalsComponent },
  { path: 'tutorials', component: TutorialsComponent},
  { path: '', component: HomeComponent , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
