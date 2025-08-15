import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GeneralButton from "./GeneralButton";
import DropdownMenuButton from "./DropdownMenuButton";
import Typography from "@mui/material/Typography";
import "../assets/IRLogo.PNG";
import Container from "@mui/material/Container";
import ArtistLogo from "./Logo";
import Socials from "./Socials";
import { useState, useEffect } from "react";

export const drawerWidth = "100%";
export const drawerHeight = 600;

export default function DesktopMenu() {
  const [dropdown, setDropdown] = useState(true);

  const DropdownContent = (
    <Box onClick={() => setDropdown(false)}>
      <GeneralButton buttonName={"Nomadic Beauties"} to={"/nomadicbeauties"} />
      <GeneralButton buttonName={"The Inner Fish"} to={"/theinnerfish"} />
      <GeneralButton
        buttonName={"Totems & Talismans"}
        to={"/totemsandtalismans"}
      />
      <GeneralButton buttonName={"The Moon and Sirens"} to={"/sirens"} />
      <GeneralButton
        buttonName={"The Penates (The Antique)"}
        to={"/thepenates"}
      />
      <GeneralButton buttonName={"Another Lions"} to={"/anotherlions"} />
    </Box>
  );

  const DrawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          width: "60%",
          alignItems: "center",
          justifySelf: "center",
          justifyContent: "space-evenly",

          maxWidth: 1000,
        }}
      >
        <Box>
          <GeneralButton buttonName={"home"} to={"/"} />
        </Box>
        <Box
          onMouseEnter ={() => setDropdown(true)}>
          <DropdownMenuButton
            buttonName={"series"}
            content={dropdown && DropdownContent}
          />
        </Box>
        <Box>
          <GeneralButton buttonName={"about"} to={"/about"} />
        </Box>
        <Box>
          <GeneralButton buttonName={"contacts"} to={"/contacts"} />
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: drawerWidth,
          height: "15vh",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 1,
          marginBottom: 3,
          justifySelf: 'center',
          maxWidth: 1400,
        }}
      >
        <Box sx={{ width: "30%", paddingLeft: 3 }}>
          <ArtistLogo />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "70%",
            padding: 3,
            justifyContent: "flex-end",
          }}
        >
          <Socials />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: drawerWidth,
          justifyContent: "center",
        }}
      >
        {DrawerContent}
      </Box>
    </>
  );
}
