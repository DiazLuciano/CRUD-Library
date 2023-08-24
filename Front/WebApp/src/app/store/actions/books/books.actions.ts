import { createAction, props } from "@ngrx/store";
import { BookPost } from "src/app/models/Books/BookPost";
import { BooksFilters } from "src/app/models/Books/BooksFilters";
import { BooksRes } from "src/app/models/Books/booksRes";

export const getBooks = createAction(
  '[Books] Get Books',
  props<{ parameters ? : BooksFilters}>()
);

export const getBooksSuccess = createAction(
  '[Books] Get Books success',
  props<{ books : BooksRes[] }>()
);

export const addBook = createAction(
  '[Books] Add Book',
  props<{ book: BookPost}>()
)

export const addBookSuccess = createAction(
  '[Books] Add Book success',
  props<{ bookRes: BooksRes}>()
)

export const addBookFailure = createAction(
  '[Books] Add Book Failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Books] Delete Book',
  props<{ bookId: number }>()
)

export const deleteBookSuccess = createAction(
  '[Books] Delete Book Success',
  props<{ bookId: number }>()
)

export const deleteBookFailure = createAction(
  '[Books] Delete Book Failure',
  props<{ error: any }>()
)

export const updateBook = createAction(
  '[Books] Update Book',
  props<{ book: BooksRes}>()
)

export const updateBookSucess = createAction(
  '[Books] Update Book Success',
  props<{ book: BooksRes}>()
)

export const updateBookFailure = createAction(
  '[Books] Update Book Failure',
  props<{ error: any }>()
)

