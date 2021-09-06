import { BooksResponse } from 'src/models/booksResponse';
import { Book } from 'src/models/book';
import { createAction } from '@ngrx/store';

export const FetchData = createAction(
  '[Book List/API] Get all Books'
)

export const UpdateData = createAction(
  '[Book List/API] Get all Books Success',
  (books: BooksResponse) => ({books})
);

export const UpdateState = createAction(
  '[Book Update/STATE] Updating the initialState',
  (books: Book) => books
);


