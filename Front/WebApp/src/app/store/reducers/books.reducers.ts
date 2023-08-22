import { createReducer, on } from "@ngrx/store";
import { BooksRes } from "src/app/models/Books/booksRes";
import { getBooksSuccess } from "../actions/books/books.actions";

export interface BooksState {
  books : BooksRes
}

const initialState : BooksRes[] = [];

export const booksReducer = createReducer(
  initialState,

  on( getBooksSuccess, (state, {books} ) => {
    state = books;
    return state
  })
)
