import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksComponent } from './pages/books/books.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list', component: BooksComponent
      },
      {
        path: 'add-book', component: AddBookComponent
      },
      {
        path: 'edit-book', component: BookEditComponent
      },
      {
        path: '**', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
