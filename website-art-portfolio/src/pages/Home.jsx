import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import FishCover from "./../assets/FishCover.jpg";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Home() {
  const [vw, setVw] = useState(window.innerWidth);
  return (
    <>
      {vw > 800 ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            bgcolor: "#000000",
            height: "40vh",
            borderTop: "2px solid #ce0000ff",
            borderBottom: "2px solid #ce0000ff",
          }}
        >
          <Box
            component="img"
            src={FishCover}
            alt="Logo"
            sx={{
              width: "auto",
              height: "52vw",
              alignContent: "center",
              justifyContent: "center",
              position: "relative",
              top: 20,
            }}
          />
        </Box>
      ) : null}

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography variant="h2" color="grey">
          Home
        </Typography>
      </Container>
    </>
  );
}
