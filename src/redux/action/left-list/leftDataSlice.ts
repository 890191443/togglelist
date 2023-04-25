import { createSlice } from "@reduxjs/toolkit";
import { TPost, TUser } from "../../../pages/lists/types/ListType";

interface LeftDataState {
  leftData: TPost[];
  leftDataLoading: boolean;
  filteredData: TPost[];
}

const initialState: LeftDataState = {
  leftData: [],
  leftDataLoading: false,
  filteredData: [],
};

export const getLeftDataSlice = createSlice({
  name: "leftData",
  initialState,
  reducers: {
    getLeftData: (state, action) => {
      state.leftData = action.payload;
      state.filteredData = action.payload;
      state.leftDataLoading = false;
    },
    leftDataLoading: (state, action) => {
      state.leftDataLoading = action.payload;
    },
    filterLeftData: (state, action) => {
      state.filteredData = state.leftData.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { getLeftData, leftDataLoading, filterLeftData } =
  getLeftDataSlice.actions;

export default getLeftDataSlice.reducer;
