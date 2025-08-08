import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import InnaRomanova from "./../assets/ImageCatalogue/about me/460124_376771295714809_1735044073_o.jpg";
import BottomNavigation from "@mui/material/BottomNavigation";
import AltaiSun from "./../assets/ImageCatalogue/NomadicBeauty/AltaiSun.jpg";
import PageHeader from "../assets/PageHeading";

export default function About() {
  return (
    <Box sx={{ width: "100%", padding: 5, justifyItems: 'center'}}>
     <PageHeader name={"Meet the Artist"}/>

      <Container
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          margin: 3,
          marginBottom: 10,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="Inna Romanova"
            src={InnaRomanova}
            sx={{ width: "30vh", height: "30vh" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginLeft: 10,
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            align="justify"
            sx={{ display: "flex", justifyContent: "center", color: "grey" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginBottom: 5,
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "left", color: "black" }}
          >
            {" "}
            Personal Statement{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginBottom: 10,
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            align="justify"
            sx={{ display: "flex", justifyContent: "center", color: "grey" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginBottom: 5,
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "left", color: "black" }}
          >
            {" "}
            Technique{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "top",
            marginBottom: 10,
          }}
        >
          <Typography
            variant="h6"
            align="justify"
            sx={{
              display: "flex",
              width: "100%",
              justifySelf: "start",
              color: "grey",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Box
            component={"img"}
            src={AltaiSun}
            alt="Logo"
            sx={{
              display: "flex",
              height: "20vh",
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              marginLeft: 3,
              position: "relative",
              alignSelf: "center",
              alignContent: "center",
              justifyContent: "center",
              borderRadius: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
