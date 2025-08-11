import IRLogo from "../assets/IRLogo.PNG";
import { Box, Container, Typography } from "@mui/material";
import logoimage from "../assets/ImageCatalogue/about me/logoimage.jpg";
import { baseTheme } from "./AppTheme";

export default function ArtistLogo() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={logoimage}
        alt="Logo"
        sx={{
          padding: 1,
          paddingBottom: "0.5em",
          [baseTheme.breakpoints.up("xs")]: { width: 300 },
          [baseTheme.breakpoints.up("sm")]: { width: 400 },
          height: "auto",
        }}
      />
    </Container>
  );
}
