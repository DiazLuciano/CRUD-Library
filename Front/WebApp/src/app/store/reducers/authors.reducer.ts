import { createReducer, on } from "@ngrx/store";
import { AuthorsRes } from "src/app/models/Authors/authorsRes";
import { addAuthorFailure, addAuthorSuccess, deleteAuthorSuccess, getAuthorsSuccess } from "../actions/authors/authors.action";

export interface AuthorsState {
  authors : AuthorsRes
}

const initialState : AuthorsRes[] = [];

export const authorsReducer = createReducer(
  initialState,

  on( getAuthorsSuccess, (state, {authors} ) => {
    state = authors;
    return state
  }),

  on( addAuthorSuccess, ( state, { authorRes }) => {
    return [...state, authorRes];
  }),

  on( addAuthorFailure , (state, { error }) => {
    return [...state, error];
  }),

  on( deleteAuthorSuccess, (state, {authorId}) => {
    return state.filter((b) => b.id !== authorId);
  }),

  on( deleteAuthorSuccess , (state, { authorId }) => {
    return state;
  }),
)
