import { GoogleBookService } from './../../services/google-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/models/book';
import { FetchData } from 'src/redux/actions/home.actions';
import { BooksState } from 'src/redux/reducers/home.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() searchValue: string = '';


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(FetchData());
  }
  onSubmit() {}
}


