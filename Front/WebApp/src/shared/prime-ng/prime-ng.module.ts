import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SortAltIcon } from 'primeng/icons/sortalt';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  imports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    SortAltIcon,
    TableModule,
    ToastModule,
    ToolbarModule,
    InputTextModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule,
    ToolbarModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
