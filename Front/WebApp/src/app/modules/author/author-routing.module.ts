import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: AuthorsComponent,
        pathMatch: 'full'
      },
      {
        path: 'add-author',
        component: AddAuthorComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit-author',
        component: AuthorEditComponent
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
export class AuthorRoutingModule { }
