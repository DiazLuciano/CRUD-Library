import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsComponent } from './pages/authors/authors.component';


@NgModule({
  declarations: [
    AuthorsComponent,
    AddAuthorComponent,
    AuthorsListComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
