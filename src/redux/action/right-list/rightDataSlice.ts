import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../pages/lists/types/ListType";

interface RightDataState {
  rightData: TUser[];
  rightDataLoading: boolean;
  filteredData: TUser[];
}

const initialState: RightDataState = {
  rightData: [],
  rightDataLoading: false,
  filteredData: [],
};

export const getRightDataSlice = createSlice({
  name: "rightData",
  initialState,
  reducers: {
    getRightData: (state, action) => {
      state.rightData = action.payload;
      state.filteredData = action.payload;
      state.rightDataLoading = false;
    },
    rightDataLoading: (state, action) => {
      state.rightDataLoading = action.payload;
    },
    filterRightData: (state, action) => {
      state.filteredData = state.rightData.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { getRightData, rightDataLoading, filterRightData } =
  getRightDataSlice.actions;

export default getRightDataSlice.reducer;
