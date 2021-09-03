import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "src/models/book";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})

export class GoogleBookService{
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?orderBy=newest&q=${queryTitle}`)
      .pipe(map((books) => books.items || []));
  }

}
