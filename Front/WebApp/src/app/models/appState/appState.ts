import { AuthorsRes } from "../Authors/authorsRes";
import { BooksRes } from "../Books/booksRes";

export interface AppState {
  books: BooksRes[],
  authors: AuthorsRes[],
}
