import { GetBooks } from './../effects/home.effects';
import { createReducer, on, Action } from '@ngrx/store';
import { Book } from "src/models/book";
import { UpdateData } from '../actions/home.actions';
import { BooksResponse } from 'src/models/booksResponse';


export interface State {
  isLoading: boolean;
  ready: boolean;
  error: string;
}

const initialState: State = {
  isLoading: false,
  ready: false,
  error: ''
}

export interface BooksState{
  books: ReadonlyArray<Book>;
}

export const initialBookArray: ReadonlyArray<Book> = [];

export const getBooks = createReducer(
  initialBookArray,
  on(UpdateData, ( state , {books}  ) => books)
);



