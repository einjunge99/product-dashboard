import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  error: null,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    showSuccess: (state, action) => {
      state.message = action.payload;
      state.error = null;
    },
    showError: (state, action) => {
      state.error = action.payload;
      state.message = null;
    },
    clearNotifications: (state) => {
      state.message = null;
      state.error = null;
    },
  },
});

export const { showSuccess, showError, clearNotifications } =
  notificationsSlice.actions;

export const notificationsReducer = notificationsSlice.reducer;
