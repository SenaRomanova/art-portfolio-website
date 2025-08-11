import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GeneralButton from "./GeneralButton";

import { Drawer, Stack } from "@mui/material";
import DropdownMenuButtonPhone from "./DropdownMenuButtonPhone";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ArtistLogo from "./Logo";

export const drawerWidth = "90vw";
export const drawerHeight = 600;

export default function PhoneMenu() {
  const [phoneMenuOpen, setMenuOpen] = useState(false);
  const DropdownContent = (
    <Stack sx={{ display: "flex", alignItems: "flex-start", padding: 2 }}>
      <GeneralButton
        onSelect={() => setMenuOpen(false)}
        buttonName={"Nomadic Beauties"}
        to={"/nomadicbeauties"}
      />
      <GeneralButton
        onSelect={() => setMenuOpen(false)}
        buttonName={"The Inner Fish"}
        to={"/theinnerfish"}
      />
      <GeneralButton
        onSelect={() => setMenuOpen(false)}
        buttonName={"Totems & Talismans"}
        to={"/totemsandtalismans"}
      />
      <GeneralButton
        onSelect={() => setMenuOpen(false)}
        buttonName={"The Moon and Sirens"}
        to={"/sirens"}
      />
      <GeneralButton
        onSelect={() => setMenuOpen(false)}
        buttonName={"The Penates (The Antique)"}
        to={"/thepenates"}
      />
      <GeneralButton
        onSelect={() => setMenuOpen(false)}
        buttonName={"Another Lions"}
        to={"/anotherlions"}
      />
    </Stack>
  );

  const DrawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          width: drawerWidth,
          height: "10vh",
        }}
      />

      <Box
        sx={{
          display: "flex",
          width: drawerWidth,
          alignContent: "center",
        }}
      >
        <List sx={{ width: "100%" }} component="nav">
          <ListItem>
            <GeneralButton
              onSelect={() => setMenuOpen(false)}
              buttonName={"home"}
              to={"/"}
            />
          </ListItem>

          <ListItem>
            <GeneralButton
              onSelect={() => setMenuOpen(false)}
              buttonName={"about"}
              to={"/about"}
            />
          </ListItem>
          <ListItem>
            <DropdownMenuButtonPhone
              buttonName={"series"}
              content={DropdownContent}
            />
          </ListItem>

          <ListItem>
            <GeneralButton
              onSelect={() => setMenuOpen(false)}
              buttonName={"contacts"}
              to={"/contacts"}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );

  return (
    <div>
      <IconButton
        aria-label="menu"
        onClick={() => {
          setMenuOpen(true);
        }}
        sx={{
          height: 100,
          width: 100,
        }}
      >
        <MenuIcon sx={{ fontSize: 65 }} />
      </IconButton>

      <Drawer
        anchor="left"
        variant="temporary"
        open={phoneMenuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ffffffff" } }}
      >
        <IconButton
          aria-label="menu"
          onClick={() => {
            setMenuOpen(false);
          }}
          sx={{
            height: 120,
            width: 120,
            alignSelf: "flex-end",
          }}
        >
          <CloseIcon sx={{ fontSize: 65 }} />
        </IconButton>
        <Box sx={{ width: "100%", alignItems: "left" }}>
          <ArtistLogo />
        </Box>
        {DrawerContent}
      </Drawer>
    </div>
  );
}
