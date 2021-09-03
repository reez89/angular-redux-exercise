import { State } from './../reducers/search.reducer';
import { Book } from 'src/models/book';
import { Action } from '@ngrx/store';

export const SET_SEARCH = '[SearchAction] SetSearch';
export const START_SEARCH = '[SearchAction] StartSearch'; //verrà triggerata al click della ricerca e quindi la chiamata http alla risorsa.
export const UPDATE_DATA = '[SearchAction] UpdateData'; //mi restituisce tutti i dati.
export const UPDATE_STATE = '[SearchAction] UpdateState'; //al momento della ricerca, per esempio, setterà la variabile isLoading a false, nel momento in cui la ricerca sarà terminata o ci sarà un errore.


export class SetSearch implements Action {
  readonly type = SET_SEARCH;
  constructor(){}
}
export class StartSearch implements Action {
  readonly type = START_SEARCH;
  constructor(public payload: string){}
}

export class UpdateData implements Action {
  readonly type = UPDATE_DATA;
  constructor(public payload: Book[]){}
}
export class UpdateState implements Action {
  readonly type = UPDATE_STATE;
  constructor(public payload: State){}
}


export type SearchAction = SetSearch | StartSearch | UpdateData | UpdateState;
