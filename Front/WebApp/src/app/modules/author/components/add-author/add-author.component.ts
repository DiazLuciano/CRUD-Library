import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState/appState';
import { getAuthors } from 'src/app/store/actions/authors/authors.action';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {

}
