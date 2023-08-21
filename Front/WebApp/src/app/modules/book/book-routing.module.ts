import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
