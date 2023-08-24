import { createSelector } from "@ngrx/store";
import { BooksRes } from "src/app/models/Books/booksRes";
import { AppState } from "src/app/models/appState/appState";

export const selectBook = ( state : AppState ) => state.books;

export const selectBookById = ( bookId: number ) =>
  createSelector(
    selectBook,
    (books: BooksRes[]) => {
      if(books) {
        if(books.find( b => b.id === +bookId )) {
          return books.find( b => b.id === +bookId )
        }
      }
      return 0;
    }
  )
