import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth';

export const sharedReducers = combineReducers({
  auth: authSlice.reducer,
});
