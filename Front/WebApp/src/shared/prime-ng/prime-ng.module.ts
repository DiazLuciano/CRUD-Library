import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SortAltIcon } from 'primeng/icons/sortalt';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  imports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    SortAltIcon,
    TableModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    CardModule,
    InputNumberModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    CardModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }
