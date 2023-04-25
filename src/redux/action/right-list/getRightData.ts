import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { getRightDataSlice } from "./rightDataSlice";
import { TPost, TUser } from "../../../pages/lists/types/ListType";

export const { getRightData, rightDataLoading } = getRightDataSlice.actions;
const rightData = "https://jsonplaceholder.typicode.com/users";

export const getRightDataList = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(rightDataLoading(true));
    const getAllItems = async () => {
      await axios
        .get<TUser[]>(rightData)
        .then(async (res) => {
          dispatch(getRightData(res.data));
          dispatch(rightDataLoading(false));
        })
        .catch(() => {
          dispatch(rightDataLoading(false));
          throw "There was an error receiving information";
        });
    };
    getAllItems();
  };
};

export default getRightDataSlice.reducer;
