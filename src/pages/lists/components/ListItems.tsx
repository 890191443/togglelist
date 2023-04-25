import * as React from "react";
import List from "@mui/material/List";
import { TextField } from "@material-ui/core";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Grid } from "@mui/material";
import { filterRightData } from "../../../redux/action/right-list/rightDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../../redux/store/Store";
import { filterLeftData } from "../../../redux/action/left-list/leftDataSlice";
import { addItem } from "../../../redux/action/toggle-list/toggleListSlice";

const ListItems = ({ isRight }: { isRight: boolean }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchItem = event.target.value;
    if (isRight) dispatch(filterRightData(searchItem));
    else dispatch(filterLeftData(searchItem));
  };

  const filterRight = useSelector(
    (state: RootState) => state.rightData.filteredData
  );

  const filterLeft = useSelector(
    (state: RootState) => state.leftData.filteredData
  );

  const handleItemClick = (item: any) => {
    const listDataAdd = {
      title: isRight ? item.name : item.title,
      id: item.id,
    };
    dispatch(addItem(listDataAdd));
  };

  return (
    <Grid item xs={12} md={12}>
      <TextField label="Search" onChange={handleFilter} />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {isRight
          ? filterRight.map((item: any, index: number) => (
              <ListItem key={index} onClick={() => handleItemClick(item)}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={isRight ? item.name : item.title}
                  secondary={isRight ? item.email : item.body}
                />
              </ListItem>
            ))
          : filterLeft.map((item: any, index: number) => (
              <ListItem key={index} onClick={() => handleItemClick(item)}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={isRight ? item.name : item.title}
                  secondary={isRight ? item.email : item.body}
                />
              </ListItem>
            ))}
      </List>
    </Grid>
  );
};

export default React.memo(ListItems);
