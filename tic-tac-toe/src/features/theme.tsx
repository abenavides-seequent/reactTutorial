import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface themeState {
  value: "";
}

const initialState: themeState = {
  value: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
