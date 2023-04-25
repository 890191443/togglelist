import { combineReducers } from "@reduxjs/toolkit";
import { getLeftDataSlice } from "../action/left-list/leftDataSlice";
import { getRightDataSlice } from "../action/right-list/rightDataSlice";
import { getToggleListSlice } from "../action/toggle-list/toggleListSlice";

const rootReducer = combineReducers({
  leftData: getLeftDataSlice.reducer,
  rightData: getRightDataSlice.reducer,
  toggleData: getToggleListSlice.reducer,
});

export default rootReducer;
