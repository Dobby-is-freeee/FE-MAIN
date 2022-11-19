import { sharedReducers } from '@shared/stores/shared-reducers';
import { combineReducers } from '@reduxjs/toolkit';

export const featureReducers = combineReducers({
  shared: sharedReducers,
});
