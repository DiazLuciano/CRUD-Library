import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
