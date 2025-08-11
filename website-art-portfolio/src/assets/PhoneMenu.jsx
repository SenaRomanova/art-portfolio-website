import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GeneralButton from "./GeneralButton";

import { Drawer, Stack } from "@mui/material";
import DropdownMenuButtonPhone from "./DropdownMenuButtonPhone";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import ArtistLogo from "./Logo";


export const drawerWidth = 500;
export const drawerHeight = 600;

export default function PhoneMenu() {
  
  const [phoneMenuOpen, setMenuOpen] = useState(false);
  const DropdownContent = (
    <Stack sx={{display: 'flex', alignItems: 'flex-start', padding: 2}}>
      <GeneralButton
        buttonName={"Nomadic Beauties"}
        to={"/nomadicbeauties"}
      />
      <GeneralButton
        buttonName={"The Inner Fish"}
        to={"/theinnerfish"}
      />
      <GeneralButton
        buttonName={"Totems & Talismans"}
        to={"/totemsandtalismans"}
      />
      <GeneralButton
        buttonName={"The Moon and Sirens"}
        to={"/sirens"}
      />
      <GeneralButton
        buttonName={"The Penates (The Antique)"}
        to={"/thepenates"}
      />
      <GeneralButton
        buttonName={"Another Lions"}
        to={"/anotherlions"}
      />
    </Stack>
  );

  

  const DrawerContent = (
    <>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: drawerWidth, height: "10vh" }} />
        
      <Box
        sx={{
          display: "flex",
          width: drawerWidth,
          alignContent: "center",
        }}
      >
        <List sx={{ width: "100%" }} component="nav">
          <ListItem>
            <GeneralButton buttonName={"home"} to={"/"}  />
          </ListItem>
          <ListItem>
            <GeneralButton
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
      <IconButton aria-label="menu"
          onClick={() => {setMenuOpen(true)}}
            sx={{
              height: 100,
              width: 100
            }}
          >
            <MenuIcon sx={{ fontSize: 65 }}/>
      </IconButton>

      <Drawer
        anchor="left"
        variant="temporary"
        open={phoneMenuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ffffffff" } }}
      >
        <IconButton aria-label="menu"
            onClick={() => {setMenuOpen(false)}}
              sx={{
                height: 120,
                width: 120,
                alignSelf: 'flex-end',
              }}
            >
              <CloseIcon sx={{ fontSize: 65 }}/>
        </IconButton>
        <Box sx={{width: '100%', alignItems: 'left'}}>
          
          <ArtistLogo/>
        </Box>
        {DrawerContent}
      </Drawer>
    </div>
  );
}
