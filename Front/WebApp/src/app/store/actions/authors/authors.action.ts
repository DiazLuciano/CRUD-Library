import { createAction, props } from "@ngrx/store";
import { AuthorPost } from "src/app/models/Authors/AuthorPost";
import { AuthorsFilters } from "src/app/models/Authors/AuthorsFilters";
import { AuthorsRes } from "src/app/models/Authors/authorsRes";

export const getAuthors = createAction(
  '[Authors] Get Authors',
  props<{ parameters ? : AuthorsFilters}>()
);

export const getAuthorsSuccess = createAction(
  '[Authors] Get Authors success',
  props<{ authors : AuthorsRes[] }>()
);

export const addAuthor = createAction(
  '[Authors] Add Author',
  props<{ author: AuthorPost}>()
)

export const addAuthorSuccess = createAction(
  '[Authors] Add Author success',
  props<{ authorRes: AuthorsRes}>()
)

export const addAuthorFailure = createAction(
  '[Authors] Add Author Failure',
  props<{ error: any }>()
);

export const deleteAuthor = createAction(
  '[Authors] Delete Author',
  props<{ authorId: number }>()
)

export const deleteAuthorSuccess = createAction(
  '[Authors] Delete Author Success',
  props<{ authorId: number }>()
)

export const deleteAuthorFailure = createAction(
  '[Authors] Delete Author Failure',
  props<{ error: any }>()
)

export const updateAuthor = createAction(
  '[Authors] Update Author',
  props<{ author: AuthorsRes}>()
)

export const updateAuthorSuccess = createAction(
  '[Authors] Update Author Success',
  props<{ author: AuthorsRes}>()
)

export const updateAuthorFailure = createAction(
  '[Authors] Update Author Failure',
  props<{ error: any }>()
)
