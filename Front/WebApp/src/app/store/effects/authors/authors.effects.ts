import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { getAuthors, getAuthorsSuccess } from "../../actions/authors/authors.action";
import { AuthorService } from "src/app/modules/author/services/author.service";

@Injectable()

export class AuthorsEffects {

  constructor(
    private authorService: AuthorService,
    private action$: Actions
  ){}

  loadAuthors$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( getAuthors ),
        tap(( params) => console.log(params)),
        concatMap(( action ) => {

          const { parameters } = action;

          return this.authorService.LoadAuthors( parameters )
          .pipe(
            map(( authors: any) => getAuthorsSuccess({ authors })),
            catchError((error:any) => of())
          )
        })
      )
  })
}
