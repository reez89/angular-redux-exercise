import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { getBooks } from 'src/redux/reducers/home.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GetBooks } from 'src/redux/effects/home.effects';
import { BooksListComponent } from './books-list/books-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot( { books: getBooks} ),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([GetBooks]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
