import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/models/book";
import { Observable } from "rxjs";
import { concatMap, delay, exhaustMap, filter, map, mergeMap, tap } from "rxjs/operators";
import { BooksResponse } from "src/models/booksResponse";



@Injectable({
  providedIn: 'root',
})

export class GoogleBookService{
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<BooksResponse> {
    return this.http
      .get<BooksResponse>(`
        ${this.API_PATH}?maxResults=5&orderBy=newest&q=${queryTitle}
      `)
  }

}
