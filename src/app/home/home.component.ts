import { GoogleBookService } from './../../services/google-api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store$: Store,
              private books: GoogleBookService
            ) { }

  ngOnInit(): void {
    this.books.searchBooks('javascript').subscribe(value => console.log(value))
  }

}
