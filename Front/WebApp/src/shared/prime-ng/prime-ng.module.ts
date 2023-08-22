import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SortAltIcon } from 'primeng/icons/sortalt';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
@NgModule({
  imports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    SortAltIcon,
    TableModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule
  ]
})
export class PrimeNgModule { }
