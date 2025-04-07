'use client';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    ajouterTemoignage: {
      reducer: (state, action) => {
        state.feedbacks.push(action.payload);
      },
      prepare: ({ nom, message, note, userId }) => ({
        payload: {
          id: nanoid(),
          nom,
          message,
          note,
          userId,
          date: new Date().toLocaleDateString(),
        },
      }),
    },
    modifierTemoignage: (state, action) => {
      const index = state.feedbacks.findIndex(f => f.id === action.payload.id);
      if (index !== -1) {
        state.feedbacks[index] = { ...state.feedbacks[index], ...action.payload };
      }
    },
    supprimerTemoignage: (state, action) => {
      state.feedbacks = state.feedbacks.filter(f => f.id !== action.payload);
    },
  },
});

export const { ajouterTemoignage, modifierTemoignage, supprimerTemoignage } = feedbackSlice.actions;
export default feedbackSlice.reducer;
