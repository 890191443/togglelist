import Grid from "@mui/material/Grid";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

const ListSkeleton = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={8}>
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton /> <Skeleton />
      </Grid>

      <Grid item xs={12} sm={12} md={8}>
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton /> <Skeleton />
      </Grid>

      <Grid item xs={12} sm={12} md={8}>
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton /> <Skeleton />
      </Grid>
    </>
  );
};

export default ListSkeleton;
