import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorPost } from 'src/app/models/Authors/AuthorPost';
import { AuthorsFilters } from 'src/app/models/Authors/AuthorsFilters';
import { AuthorsRes } from 'src/app/models/Authors/authorsRes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  LoadAuthors( parameters ? : AuthorsFilters ):Observable<AuthorsRes>{
    return this.http.get<AuthorsRes>(`${environment.url}Author`);
  }

  AddAuthor(body: AuthorPost): Observable<any> {
    return this.http.post(`${environment.url}Author`, body);
  }

  UpdateAuthor( id: number, body: AuthorPost){
    return this.http.put(`${environment.url}Author?id=${id}`, body, {responseType: 'text'});
  }

  DeleteAuthor(id: number) {
    return this.http.delete(`${environment.url}Author/${id}`, {responseType: 'text'});
  }
}
