import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookPost } from 'src/app/models/Books/BookPost';
import { BooksFilters } from 'src/app/models/Books/BooksFilters';
import { BooksRes } from 'src/app/models/Books/booksRes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  LoadBooks( parameters ? : BooksFilters ):Observable<BooksRes>{
    return this.http.get<BooksRes>(`${environment.url}Book`);
  }

  AddBook(body: BookPost): Observable<any> {
    return this.http.post(`${environment.url}Book`, body);
  }

  UpdateBook( id: number, body: BookPost){
    return this.http.put(`${environment.url}Book?id=${id}`, body, {responseType: 'text'});
  }

  DeleteBook(id: number) {
    return this.http.delete(`${environment.url}Book/${id}`, {responseType: 'text'});
  }
}
