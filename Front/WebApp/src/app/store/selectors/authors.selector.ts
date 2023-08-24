import { createSelector } from "@ngrx/store";
import { AuthorsRes } from "src/app/models/Authors/authorsRes";
import { AppState } from "src/app/models/appState/appState";

export const selectAuthor = ( state : AppState ) => state.authors;

export const selectAuthorById = ( authorId: number ) =>
  createSelector(
    selectAuthor,
    (authors: AuthorsRes[]) => {
      if(authors) {
        if(authors.find( b => b.id === +authorId )) {
          return authors.find( b => b.id === +authorId )
        }
      }
      return 0;
    }
  )
