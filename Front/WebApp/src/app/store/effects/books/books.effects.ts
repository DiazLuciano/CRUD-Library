import { BookService } from "src/app/modules/book/services/book.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { getBooks, getBooksSuccess } from "../../actions/books/books.actions";
import { catchError, concatMap, map, of, tap } from "rxjs";

@Injectable()

export class BooksEffects {

  constructor(
    private bookService: BookService,
    private action$: Actions
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
  })
}
