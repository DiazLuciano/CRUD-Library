import { createAction, props } from "@ngrx/store";
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

