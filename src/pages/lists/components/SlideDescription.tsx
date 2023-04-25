import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SlideDescription = ({ getData }: { getData: () => void }) => {
  return (
    <Box
      sx={{
        bgcolor: "#eeeeee",
        pt: 2,
        pb: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Code Challenge
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Coding challenge for charisma company In this challenge, I have used
          typescript, redux, and material ui technologies
        </Typography>
        <Stack
          sx={{ pt: 3 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" onClick={getData}>
            Get List Data
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SlideDescription;
