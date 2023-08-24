import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthorsRes } from 'src/app/models/Authors/authorsRes';
import { BooksRes } from 'src/app/models/Books/booksRes';
import { AppState } from 'src/app/models/appState/appState';
import { getAuthors } from 'src/app/store/actions/authors/authors.action';
import { updateBook } from 'src/app/store/actions/books/books.actions';
import { selectBookById } from 'src/app/store/selectors/books.selectors';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  authors: AuthorsRes[] | undefined;
  selectedAuthorId: AuthorsRes | undefined;
  bookForm : FormGroup;
  bookId!: number;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private aRoute: ActivatedRoute
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
    this.CheckParams();
  }

  CheckParams():void {
    this.aRoute.paramMap.subscribe( params => {
      if(params){
        // get Book Id
        this.bookId = (params as any).get('bookId');
        this.store.select(selectBookById(this.bookId))
          .subscribe((book) => {
            if(book) {
              this.BuildForm(book);
            }
          })
      }
    })
  }

  BuildForm(book: BooksRes):void {
    this.bookForm.setValue({
      title: book.title,
      description : book.description,
      stock: book.stock,
      createdDate: new Date(book.createdDate),
      selectedAuthorId: book.authorId
    })
  }

  EditBook(): void {
    const bookToEdit: BooksRes = {
      id: this.bookId,
      title: this.bookForm.get('title')?.value,
      description: this.bookForm.get('description')?.value,
      createdDate: this.bookForm.get('createdDate')?.value,
      authorId: this.bookForm.get('selectedAuthorId')?.value,
      stock: this.bookForm.get('stock')?.value
    }
    this.store.dispatch( updateBook({book: bookToEdit}))
  }

  /*
    SECTION GET AUTHORS
  */
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
