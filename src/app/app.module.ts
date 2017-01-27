import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { AppRoutingModule } from './app-routing.module';

// store
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter';
import { alertReducer } from './store/reducers/alert';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // store
    StoreModule.provideStore({ counter: counterReducer, alert: alertReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
