import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthorsRes } from 'src/app/models/Authors/authorsRes';
import { AppState } from 'src/app/models/appState/appState';
import { getAuthors } from 'src/app/store/actions/authors/authors.action';
import { BookPost } from '../../../../models/Books/BookPost';
import { addBook, addBookFailure } from 'src/app/store/actions/books/books.actions';
import { NotificationService } from 'src/core/services/notification.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  authors: AuthorsRes[] | undefined;
  selectedAuthorId: AuthorsRes | undefined;

  bookForm : FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ){
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      stock: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      createdDate: ['', [Validators.required]],
      selectedAuthorId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.DispatchGetAuthors();
  }

  SaveNewBook(): void {
    const book: BookPost = {
      title: this.bookForm.get('title')?.value,
      description: this.bookForm.get('description')?.value,
      createdDate: this.bookForm.get('createdDate')?.value,
      authorId: this.bookForm.get('selectedAuthorId')?.value,
      stock: this.bookForm.get('stock')?.value
    };

    this.store.dispatch(addBook({book}));
    this.bookForm.reset();
  }

  DispatchGetAuthors(): void {
    this.store.dispatch(getAuthors({ }));
    this.GetAuthors();
  }

  GetAuthors(): void {
    this.store.select( AppState => AppState.authors)
      .subscribe( authors => {
        this.authors = authors;
        this.concatNames();
      })
  }

  concatNames(): void {
    this.authors = this.authors?.map((author: any) => {
      return {
        ...author,
        displayLabel: author.name + ' ' + author.lastname
      };
    });
  }

}
