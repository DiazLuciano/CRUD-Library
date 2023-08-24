import { createAction, props } from "@ngrx/store";
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
