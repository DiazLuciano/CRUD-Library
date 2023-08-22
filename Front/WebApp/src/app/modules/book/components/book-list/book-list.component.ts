import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BooksRes } from 'src/app/models/Books/booksRes';
import { AppState } from 'src/app/models/appState/appState';
import { getBooks } from 'src/app/store/actions/books/books.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class BookListComponent implements OnInit {
  loading: boolean = true;
  @ViewChild('dt') dt: Table | undefined;

  bookDialog: boolean = false;

  books: BooksRes[] = [];

  book!: BooksRes;

  selectedBooks!: BooksRes[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource():void{
    this.store.select( AppState => AppState.books )
      .subscribe( books => {
        this.books = books;
        this.loading = false;
      })
  }

  clear(table: Table) {
    table.clear();
  }

  editBook():void{

  }

  deleteBook():void{

  }

  filterGlobal($event:any) {
    const inputElement = $event.target as HTMLInputElement;
    if (inputElement !== null) {
      const inputValue = inputElement.value;
      this.dt?.filterGlobal(inputValue, 'contains');
    }
  }

}
