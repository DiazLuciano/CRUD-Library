import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './modules/book/components/books/books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'book',
    loadChildren: () => import('./modules/book/book.module').then( m => m.BookModule)
  },
  {
    path: 'author',
    loadChildren: () => import('./modules/author/author.module').then( m => m.AuthorModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
