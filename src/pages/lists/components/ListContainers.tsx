import Button from "@mui/material/Button";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../../redux/store/Store";
import {
  removeAllItem,
  removeItem,
} from "../../../redux/action/toggle-list/toggleListSlice";

const ListContainers = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const toggleData = useSelector(
    (state: RootState) => state.toggleData.toggleData
  );

  const handleItemClick = (item: any) => {
    dispatch(removeItem(item.id));
  };

  const handleRemoveAllClick = () => {
    dispatch(removeAllItem());
  };
  return (
    <Grid item xs={12} md={12}>
      <Button
        variant="contained"
        onClick={() => handleRemoveAllClick()}
        style={{ marginTop: "15px" }}
      >
        clear all
      </Button>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          // mt: 5,
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {toggleData.map((item: any) => (
          <ListItem key={item.id} onClick={() => handleItemClick(item)}>
            <Button variant="outlined">{item.title}</Button>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
export default ListContainers;
