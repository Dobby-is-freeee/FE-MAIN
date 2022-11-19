import logger from 'redux-logger';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { featureReducers } from '@features/feat-reducers';
import { env } from '@common/env';

export const store = configureStore({
  reducer: featureReducers,
  devTools: env.isProduction,
  middleware: (getDefaultMiddleware) => {
    if (env.isProduction) {
      return getDefaultMiddleware();
    }
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
