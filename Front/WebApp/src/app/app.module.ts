import { ErrorHandler, NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componets
import { AppComponent } from './app.component';

// Services
import { GlobalErrorHandlerService } from 'src/core/services/global-error-handler.service';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { metaEffects } from './store/metaEffects';
import { reducers } from './store/metaReducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers /*, {}*/),
    EffectsModule.forRoot(metaEffects),
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
