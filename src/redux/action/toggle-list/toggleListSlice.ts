import { createSlice } from "@reduxjs/toolkit";

interface Item {
  title: string;
  id: number;
}

interface RightDataState {
  toggleData: Item[];
}

const initialState: RightDataState = {
  toggleData: [],
};

export const getToggleListSlice = createSlice({
  name: "toggleData",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.toggleData.push(action.payload);
    },
    removeItem: (state, action) => {
      state.toggleData = state.toggleData.filter(
        (item) => item.id !== action.payload
      );
    },

    removeAllItem: (state) => {
      state.toggleData = [];
    },
  },
});

export const { addItem, removeItem, removeAllItem } =
  getToggleListSlice.actions;

export default getToggleListSlice.reducer;
