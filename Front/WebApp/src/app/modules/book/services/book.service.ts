import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
