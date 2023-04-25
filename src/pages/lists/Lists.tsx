import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { getLeftDataList } from "../../redux/action/left-list/getLeftData";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import { Container, Grid } from "@mui/material";
import Footer from "./components/Footer";
import SlideDescription from "./components/SlideDescription";
import { getRightDataList } from "../../redux/action/right-list/getRightData";
import ListSkeleton from "./components/ListSkeleton";
import ListContainers from "./components/ListContainers";
const theme = createTheme();

export default function Lists() {
  const dispatch: Dispatch<any> = useDispatch();

  const leftDataLoading = useSelector(
    (state: RootState) => state.leftData.leftDataLoading
  );

  const rightDataLoading = useSelector(
    (state: RootState) => state.rightData.rightDataLoading
  );

  const getData = () => {
    dispatch(getLeftDataList());
    dispatch(getRightDataList());
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <SlideDescription getData={getData} />
        {rightDataLoading || leftDataLoading ? (
          <>
            <Container sx={{ py: 1 }} maxWidth="xl">
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <ListSkeleton />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ListSkeleton />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ListSkeleton />
                </Grid>
              </Grid>
            </Container>
          </>
        ) : (
          <>
            <Container sx={{ py: 1 }} maxWidth="xl">
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <ListItems isRight={false} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ListItems isRight={true} />
                </Grid>

                <Grid item xs={12} md={4}>
                  <ListContainers />
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
