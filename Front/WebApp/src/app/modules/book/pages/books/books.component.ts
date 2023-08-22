import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { getBooks } from 'src/app/store/actions/books/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.GetBooks();
  }

  GetBooks(): void {
    this.store.dispatch(getBooks({ }));
  }
}
