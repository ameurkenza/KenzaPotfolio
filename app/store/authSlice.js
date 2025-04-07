'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],        // chargés depuis le store global
  currentUser: null // reste null après un refresh
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      const { usernameOrEmail, password } = action.payload;
      const user = state.users.find(
        (u) =>
          (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
          u.password === password
      );
      if (user) {
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
