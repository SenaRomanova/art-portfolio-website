import IRLogo from "../assets/IRLogo.PNG";
import { Box, Container, Typography } from "@mui/material";

export default function ArtistLogo() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        width: 300,
        p: 2.5,
      }}
    >
      <Box
        component="img"
        src={IRLogo}
        alt="Logo"
        sx={{
          paddingBottom: "0.5em",
          width: "55px",
          height: "auto",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "inherit",
          paddingLeft: "0.5em",
        }}
      >
        <Box
          sx={{ display: "flex", width: "inherit", flexDirection: "column" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 100,
              textAlign: "left",
              color: "grey",
              wordSpacing: "0.7em",
            }}
          >
            I N N A
          </Typography>
        </Box>
        <Box sx={{ width: "200px", height: "2px", bgcolor: "red" }} />
        <Box
          sx={{ display: "flex", width: "inherit", flexDirection: "column" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 200, textAlign: "left", color: "#000000" }}
          >
            ROMANOVA
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", width: "inherit", flexDirection: "column" }}
        >
          <Typography
            sx={{
              fontWeight: 100,
              fontSize: "1.5em",
              lineHeight: 0.5,
              textAlign: "left",
              color: "grey",
            }}
          >
            artist
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
