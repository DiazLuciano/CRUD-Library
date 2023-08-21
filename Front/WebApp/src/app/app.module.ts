import { ErrorHandler, NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componets
import { AppComponent } from './app.component';

// Services
import { GlobalErrorHandlerService } from 'src/core/services/global-error-handler.service';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
