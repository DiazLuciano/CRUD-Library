import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AuthorsRes } from 'src/app/models/Authors/authorsRes';
import { AppState } from 'src/app/models/appState/appState';
import { deleteAuthor } from 'src/app/store/actions/authors/authors.action';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
  providers: [ConfirmationService]
})
export class AuthorsListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  authorDialog: boolean = false;
  authors: AuthorsRes[] = [];

  constructor(
    private store: Store<AppState>,
    private confirmationService: ConfirmationService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource():void{
    this.store.select( AppState => AppState.authors )
      .subscribe( authors => {
        this.authors = authors;
      })
  }

  clear(table: Table) {
    table.clear();
  }

  editAuthor(authorId: number):void{
    if(authorId)
      this.router.navigate(['/authors/edit-author', { authorId : authorId }]);
  }

  deleteAuthor(author: AuthorsRes) {
    this.confirmationService.confirm({
        message: '¿Esta seguro que desea eliminar al autor' + author.name + '?',
        header: 'Confirmacion',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.store.dispatch(deleteAuthor({ authorId : author.id}));
        }
    });
}

  filterGlobal($event:any) {
    const inputElement = $event.target as HTMLInputElement;
    if (inputElement !== null) {
      const inputValue = inputElement.value;
      this.dt?.filterGlobal(inputValue, 'contains');
    }
  }
}
