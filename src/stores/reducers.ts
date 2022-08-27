import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth';

export const reducers = combineReducers({
  auth: authSlice.reducer,
});
