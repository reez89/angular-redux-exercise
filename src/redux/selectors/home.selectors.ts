import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { Book } from "src/models/book";
import { BooksState } from "../reducers/home.reducer";

export const booksSelector = createSelector(
  (state: BooksState) => state.books,
  (books: ReadonlyArray<Book>) => books
)
