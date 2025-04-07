'use client';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import authReducer from './authSlice';
import feedbackReducer from './feedbackSlice';
import { loadState, saveState } from './localStorageUtils';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    feedback: feedbackReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();

  
  saveState({
    users: state.users,
    auth: {
      users: state.auth.users
    },
    feedback: state.feedback
  });
});
