import { BookService } from "src/app/modules/book/services/book.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { addBook, addBookFailure, addBookSuccess, deleteBook, deleteBookFailure, deleteBookSuccess, getBooks, getBooksSuccess, updateBook, updateBookFailure, updateBookSucess } from "../../actions/books/books.actions";
import { catchError, concatMap, map, mergeMap, of, tap } from "rxjs";
import { BooksRes } from "src/app/models/Books/booksRes";
import { MessageService } from "primeng/api";
import { BookPost } from "src/app/models/Books/BookPost";

@Injectable()

export class BooksEffects {

  constructor(
    private bookService: BookService,
    private action$: Actions,
    private messageService: MessageService
  ){}

  loadBooks$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( getBooks ),
        tap(( params) => console.log(params)),
        concatMap(( action ) => {

          const { parameters } = action;

          return this.bookService.LoadBooks( parameters )
          .pipe(
            map(( books: any) => getBooksSuccess({ books })),
            catchError((error:any) => of())
          )
        })
      )
  });

  addBook$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( addBook ),
        mergeMap((action) => {
          const { book } = action;
          return this.bookService.AddBook(book)
          .pipe(
            map((data) => {

              this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'El libro se agrego con éxito.'
              });

              let bookRes: BooksRes = data as BooksRes;
              return addBookSuccess({bookRes})
            }),
            catchError(error => {

              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: error
              });

              return of(addBookFailure({ error }));
            })
          )
        })
      )
    });

  updateBook$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( updateBook ),
        mergeMap((action) => {
          let bookPost: BookPost = action.book as BookPost;
          return this.bookService.UpdateBook(action.book.id, bookPost)
          .pipe(
            map((data) => {

              this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'El libro se actualizo con éxito.'
              });

              const { book } = action;
              return updateBookSucess({book : book})
            }),
            catchError(error => {
              console.log(error)
              console.log(error.message)
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: error.message
              });

              return of(updateBookFailure({ error }));
            })
          )
        })
      )
    });

  deleteBook$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( deleteBook ),
        mergeMap(( action ) => {
          const { bookId } = action;
          return this.bookService.DeleteBook( bookId)
           .pipe(
              map(() => {

                this.messageService.add({
                  severity: 'success',
                  summary: 'Éxito',
                  detail: 'El libro se eliminó con éxito.'
                });

                return deleteBookSuccess({ bookId : bookId})
              }),
              catchError(error => {

                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: error
                });

                return of(deleteBookFailure({ error }));
              })
           )
        })
      )
  })
}
