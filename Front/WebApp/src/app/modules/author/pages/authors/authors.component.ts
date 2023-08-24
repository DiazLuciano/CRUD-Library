import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { getAuthors } from 'src/app/store/actions/authors/authors.action';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.GetAuthors();
  }

  GetAuthors(): void {
    this.store.dispatch(getAuthors({ }));
  }
}
