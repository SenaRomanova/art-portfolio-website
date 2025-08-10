import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GeneralButton from "./GeneralButton";
import DropdownMenuButton from "./DropdownMenuButton";
import Typography from "@mui/material/Typography";
import "../assets/IRLogo.PNG";
import Container from "@mui/material/Container";
import IRLogo from "../assets/IRLogo.PNG";
import { Drawer, Stack } from "@mui/material";
import DropdownMenuButtonPhone from "./DropdownMenuButtonPhone";

export const drawerWidth = 300;
export const drawerHeight = 600;

export default function PhoneMenu() {
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

      <Box sx={{ width: drawerWidth, height: "10vh" }} />

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
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ffffffff" } }}
      >
        {DrawerContent}
      </Drawer>
    </div>
  );
}
