import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksComponent } from './pages/books/books.component';
import { PrimeNgModule } from 'src/shared/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from 'src/core/services/notification.service';
import { ToastModule } from 'primeng/toast';
import { BookEditComponent } from './components/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AddBookComponent,
    BookListComponent,
    BooksComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class BookModule { }
