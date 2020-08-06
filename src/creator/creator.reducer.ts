import { Action, createReducer, on } from '@ngrx/store';
import { Creator, initialState, State } from './creator';

import * as AppRootActions from '../app/app.actions';
import { CREATOR_LIST } from './creator_database';

const appRootReducer = createReducer(
    initialState,
    on(AppRootActions.initialize_state, state => ({ creators: CREATOR_LIST })),
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return appRootReducer(state, action)
  }