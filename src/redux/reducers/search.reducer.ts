import * as  SearchAction from "../actions/home.actions";

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

export function searchReducer(
  state = initialState, action: SearchAction.SearchAction
){
  switch(action.type){
    case SearchAction.SET_SEARCH :
      return {
        ...state,
        isLoading: false,
        ready: true,
        error: null
      }
  }
}
