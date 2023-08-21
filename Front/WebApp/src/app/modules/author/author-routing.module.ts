import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorsComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-author',
    component: AddAuthorComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
