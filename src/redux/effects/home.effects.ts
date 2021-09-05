// All'interno degli effects vengono effettuate le chiamate http.
import { map, tap, switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { GoogleBookService } from 'src/services/google-api.service';
import { FetchData, UpdateData } from '../actions/home.actions';
import { BooksResponse } from 'src/models/booksResponse';
import { Book } from 'src/models/book';


@Injectable()
export class GetBooks {

    loadBooks$ = createEffect(() =>
      this.actions$.pipe(
        ofType(FetchData),
          switchMap(() =>
           {
             return this.dataService.searchBooks('all').pipe(
              map((books: BooksResponse) => {
                const newBooksArray = []
                newBooksArray.push(books.items)
                return  UpdateData(newBooksArray)
              }),
              tap(books => {
                console.log('EFFECT',books)
              })
            )
          }
        )
      )
    );

    constructor(
      private actions$: Actions,
      private http: HttpClient,
      private dataService: GoogleBookService
    ) {}
}
