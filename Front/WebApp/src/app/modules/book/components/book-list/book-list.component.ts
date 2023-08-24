import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BooksRes } from 'src/app/models/Books/booksRes';
import { AppState } from 'src/app/models/appState/appState';
import { deleteBook, deleteBookSuccess } from 'src/app/store/actions/books/books.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class BookListComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;
  bookDialog: boolean = false;
  books: BooksRes[] = [];

  constructor(
    private store: Store<AppState>,
    private confirmationService: ConfirmationService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource():void{
    this.store.select( AppState => AppState.books )
      .subscribe( books => {
        this.books = books;
      })
  }

  clear(table: Table) {
    table.clear();
  }

  editBook(bookId: number):void{
    if(bookId)
      this.router.navigate(['/books/edit-book', { bookId : bookId }]);
  }

  deleteBook(book: BooksRes) {
    this.confirmationService.confirm({
        message: '¿Esta seguro que desea eliminar ' + book.title + '?',
        header: 'Confirmacion',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.store.dispatch(deleteBook({ bookId : book.id}));
        }
    });
}

  filterGlobal($event:any) {
    const inputElement = $event.target as HTMLInputElement;
    if (inputElement !== null) {
      const inputValue = inputElement.value;
      this.dt?.filterGlobal(inputValue, 'contains');
    }
  }

}
