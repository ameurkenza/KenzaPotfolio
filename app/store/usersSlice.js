'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // tableau des utilisateurs {email, motdepasse}
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { registerUser } = usersSlice.actions;
export default usersSlice.reducer;
