import { Box, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/somaye-safavi-571647197/"
      >
        somaye safavi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1976D2",
        p: 1,
        color: "white",
      }}
      component="footer"
    >
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      >
        Frontend Developer - React
      </Typography>
      <Copyright />
    </Box>
  );
};
export default Footer;
