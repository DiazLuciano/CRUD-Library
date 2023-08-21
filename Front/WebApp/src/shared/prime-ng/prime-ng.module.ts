import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    ProgressSpinnerModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    ProgressSpinnerModule,
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
