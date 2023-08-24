import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { PrimeNgModule } from 'src/shared/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AuthorsComponent,
    AddAuthorComponent,
    AuthorsListComponent,
    AuthorEditComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class AuthorModule { }
