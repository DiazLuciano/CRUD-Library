import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import { addAuthor, addAuthorFailure, addAuthorSuccess, deleteAuthor, deleteAuthorFailure, deleteAuthorSuccess, getAuthors, getAuthorsSuccess, updateAuthor, updateAuthorFailure, updateAuthorSuccess } from "../../actions/authors/authors.action";
import { AuthorService } from "src/app/modules/author/services/author.service";
import { MessageService } from "primeng/api";
import { AuthorsRes } from "src/app/models/Authors/authorsRes";
import { AuthorPost } from "src/app/models/Authors/AuthorPost";

@Injectable()

export class AuthorsEffects {

  constructor(
    private authorService: AuthorService,
    private action$: Actions,
    private messageService: MessageService
  ){}

  loadAuthors$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( getAuthors ),
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

  addAuthor$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( addAuthor ),
        mergeMap((action) => {
          const { author } = action;
          return this.authorService.AddAuthor(author)
          .pipe(
            map((data) => {

              this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'El autor se agrego con éxito.'
              });

              let authorRes: AuthorsRes = data as AuthorsRes;
              return addAuthorSuccess({authorRes: authorRes})
            }),
            catchError(error => {

              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: error.message
              });

              return of(addAuthorFailure({ error }));
            })
          )
        })
      )
    });

  updateAuthor$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( updateAuthor ),
        mergeMap((action) => {
          let authorPost: AuthorPost = action.author as AuthorPost;
          console.log(authorPost)
          return this.authorService.UpdateAuthor(action.author.id, authorPost)
          .pipe(
            map((data) => {

              this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'El autor se actualizo con éxito.'
              });

              const { author } = action;
              return updateAuthorSuccess({author : author})
            }),
            catchError(error => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: error.message
              });

              return of(updateAuthorFailure({ error }));
            })
          )
        })
      )
    });

  deleteAuthor$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType( deleteAuthor ),
        mergeMap(( action ) => {
          const { authorId: authorId } = action;
          return this.authorService.DeleteAuthor( authorId)
           .pipe(
              map(() => {

                this.messageService.add({
                  severity: 'success',
                  summary: 'Éxito',
                  detail: 'El autor se eliminó con éxito.'
                });

                return deleteAuthorSuccess({ authorId : authorId})
              }),
              catchError(error => {

                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: error.message
                });

                return of(deleteAuthorFailure({ error }));
              })
           )
        })
      )
  })
}
