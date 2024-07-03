import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user-schema';

const initialState: UserSchema = {
  authData: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {

    },
    decrement: (state) => {

    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
