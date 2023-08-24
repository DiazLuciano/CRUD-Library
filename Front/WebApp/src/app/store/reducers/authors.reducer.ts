import { createReducer, on } from "@ngrx/store";
import { AuthorsRes } from "src/app/models/Authors/authorsRes";
import { getAuthorsSuccess } from "../actions/authors/authors.action";

export interface AuthorsState {
  authors : AuthorsRes
}

const initialState : AuthorsRes[] = [];

export const authorsReducer = createReducer(
  initialState,

  on( getAuthorsSuccess, (state, {authors} ) => {
    state = authors;
    return state
  })
)
