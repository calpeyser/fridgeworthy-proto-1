import { Action, createReducer, on } from '@ngrx/store';
import * as AppRootActions from '../app/app.actions';

import { Creation, State, initialState } from './creation';
import { SILLY_ANIMATION_VIDEOS } from './silly_animation_videos';

const appRootReducer = createReducer(
  initialState,
  on(AppRootActions.initialize_state, state => ({ creations: SILLY_ANIMATION_VIDEOS }))
);

export function reducer(state: State | undefined, action: Action) {
  return appRootReducer(state, action)
}