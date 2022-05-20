import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { isProduction } from '@/config';
import { reducers } from './reducers';

export const store = configureStore({
  reducer: reducers,
  devTools: isProduction,
  middleware: (getDefaultMiddleware) => {
    if (isProduction) {
      return getDefaultMiddleware();
    }
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
