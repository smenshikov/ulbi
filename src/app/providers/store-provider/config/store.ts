import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { StateSchema } from './state-schema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer, user: userReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
