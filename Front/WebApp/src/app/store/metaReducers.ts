import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../models/appState/appState";
import { booksReducer } from "./reducers/books.reducers";

export const reducers : ActionReducerMap<AppState> = {
  books: booksReducer
}
