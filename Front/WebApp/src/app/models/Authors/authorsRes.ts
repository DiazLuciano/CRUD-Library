import { BooksRes } from "../Books/booksRes";

export interface AuthorsRes {
  id:       number;
  name:     string;
  lastname: string;
  books?: BooksRes;
}
