import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../models/appState/appState";
import { booksReducer } from "./reducers/books.reducers";
import { authorsReducer } from "./reducers/authors.reducer";

export const reducers : ActionReducerMap<AppState> = {
  books: booksReducer,
  authors: authorsReducer
}
