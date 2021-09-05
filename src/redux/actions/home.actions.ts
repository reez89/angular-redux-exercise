import { State } from '../reducers/home.reducer';
import { Book } from 'src/models/book';
import { createAction, props } from '@ngrx/store';

export const FetchData = createAction(
  '[Book List/API] Get all Books'
)

export const UpdateData = createAction(
  '[Book List/API] Get all Books Success',
  (books: Book[]) => ({books})
);

export const UpdateState = createAction(
  '[Book Update/STATE] Updating the initialState',
  (books: Book) => books
);


