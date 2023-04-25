import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" color="primary" align="center">
        404
      </Typography>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Page not found
      </Typography>
      <Button variant="contained" component={Link} to="/" size="large">
        Go back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
