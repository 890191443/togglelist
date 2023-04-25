import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { getLeftDataSlice } from "./leftDataSlice";
import { TPost } from "../../../pages/lists/types/ListType";

export const { getLeftData, leftDataLoading } = getLeftDataSlice.actions;
const leftData = "https://jsonplaceholder.typicode.com/posts";

export const getLeftDataList = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(leftDataLoading(true));
    const getAllItems = async () => {
      await axios
        .get<TPost[]>(leftData)
        .then(async (res) => {
          dispatch(getLeftData(res.data));
          dispatch(leftDataLoading(false));
        })
        .catch(() => {
          dispatch(leftDataLoading(false));
          throw "There was an error receiving information";
        });
    };
    getAllItems();
  };
};

export default getLeftDataSlice.reducer;
