import { createReducer, on } from "@ngrx/store";
import { BooksRes } from "src/app/models/Books/booksRes";
import { addBookFailure, addBookSuccess, deleteBookSuccess, getBooksSuccess, updateBookSucess } from "../actions/books/books.actions";

export interface BooksState {
  books : BooksRes
}

const initialState : BooksRes[] = [];

export const booksReducer = createReducer(
  initialState,

  on( getBooksSuccess, (state, {books} ) => {
    state = books;
    return state
  }),

  on( addBookSuccess, ( state, { bookRes }) => {
    return [...state, bookRes];
  }),

  on( addBookFailure , (state, { error }) => {
    return [...state, error];
  }),

  on( deleteBookSuccess, (state, {bookId}) => {
    return state.filter((b) => b.id !== bookId);
  }),

  on( updateBookSucess , (state, { book }) => {
    return state;
  }),
)
