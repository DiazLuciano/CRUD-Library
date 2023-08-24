import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthorPost } from 'src/app/models/Authors/AuthorPost';
import { AppState } from 'src/app/models/appState/appState';
import { addAuthor, getAuthors } from 'src/app/store/actions/authors/authors.action';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  authorForm : FormGroup;
  authorId!: number;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ){
    this.authorForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]]
    });
  }

  AddAuthor(){
    const author: AuthorPost = {
      name: this.authorForm.get('name')?.value,
      lastname: this.authorForm.get('lastname')?.value
    };

    this.store.dispatch(addAuthor({author: author}));
    this.authorForm.reset();
  }

}
