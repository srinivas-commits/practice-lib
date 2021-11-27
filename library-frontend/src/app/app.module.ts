import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LibraryBooksListComponent } from './library-books-list/library-books-list.component';
import { HomeComponent } from './home/home.component';
import { HostalsComponent } from './hostals/hostals.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { KstableComponent } from './kstable/kstable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { HkstableComponent } from './hkstable/hkstable.component';
import { IssueHostalComponent } from './issue-hostal/issue-hostal.component';
import { LoginComponent } from './login/login.component';
import { HttpAuthInterceptor } from './http-auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddHostalComponent } from './add-hostal/add-hostal.component';
import { VideosanitizePipe } from './videosanitize.pipe';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryBooksListComponent,
    HostalsComponent,
    TutorialsComponent,
    KstableComponent,
    IssueBookComponent,
    HkstableComponent,
    IssueHostalComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
    AddHostalComponent,
    VideosanitizePipe,
    AddVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
