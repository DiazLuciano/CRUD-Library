import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AuthorsRes } from 'src/app/models/Authors/authorsRes';
import { AppState } from 'src/app/models/appState/appState';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  loading: boolean = true;
  // @ViewChild('dt') dt: Table | undefined;

  authorDialog: boolean = false;

  authors: AuthorsRes[] = [];

  author!: AuthorsRes;

  selectedAuthors!: AuthorsRes[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(
    private store: Store<AppState>,
    // private messageService: MessageService,
    // private confirmationService: ConfirmationService
  ){}

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource():void{
    this.store.select( AppState => AppState.authors )
      .subscribe( authors => {
        console.log(authors)
        this.authors = authors;
        this.loading = false;
      })
  }
}
