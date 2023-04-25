import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

export type RootState = ReturnType<typeof rootReducer>;
const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
