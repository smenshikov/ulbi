import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/state-schema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
