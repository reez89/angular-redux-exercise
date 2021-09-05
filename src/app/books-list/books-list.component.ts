import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BooksState } from 'src/redux/reducers/home.reducer';
import { booksSelector } from 'src/redux/selectors/home.selectors';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$ = this.store.pipe(select(booksSelector));

  constructor(private store: Store<BooksState>) {}

  ngOnInit() {}

}
