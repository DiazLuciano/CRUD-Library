import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthorPost } from 'src/app/models/Authors/AuthorPost';
import { AuthorsRes } from 'src/app/models/Authors/authorsRes';
import { AppState } from 'src/app/models/appState/appState';
import { updateAuthor } from 'src/app/store/actions/authors/authors.action';
import { selectAuthorById } from 'src/app/store/selectors/authors.selector';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent {
  authorForm : FormGroup;
  authorId!: number;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private aRoute: ActivatedRoute
  ){
    this.authorForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.CheckParams();
  }

  CheckParams():void {
    this.aRoute.paramMap.subscribe( params => {
      if(params){
        // get author Id
        this.authorId = (params as any).get('authorId');
        this.store.select(selectAuthorById(this.authorId))
          .subscribe((author) => {
            if(author) {
              this.BuildForm(author);
            }
          })
      }
    })
  }

  BuildForm(author: AuthorsRes):void {
    this.authorForm.setValue({
      name: author.name,
      lastname : author.lastname
    })
  }

  EditAuthor(): void {
    const authorToEdit: AuthorsRes = {
      id: this.authorId,
      name: this.authorForm.get('name')?.value,
      lastname: this.authorForm.get('lastname')?.value
    }
    this.store.dispatch( updateAuthor({author: authorToEdit}))
  }

}
