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

export const drawerWidth = "100%";
export const drawerHeight = 600;

export default function DesktopMenu() {
  const DropdownContent = (
    <Box>
      <GeneralButton
        buttonName={"Nomadic Beauties"}
        to={"/nomadicbeauties"}
        fontSize={"1em"}
      />
      <GeneralButton
        buttonName={"The Inner Fish"}
        to={"/theinnerfish"}
        fontSize={"1em"}
      />
      <GeneralButton
        buttonName={"Totems & Talismans"}
        to={"/totemsandtalismans"}
        fontSize={"1em"}
      />
      <GeneralButton
        buttonName={"The Moon and Sirens"}
        to={"/sirens"}
        fontSize={"1em"}
      />
      <GeneralButton
        buttonName={"The Penates (The Antique)"}
        to={"/thepenates"}
        fontSize={"1em"}
      />
      <GeneralButton
        buttonName={"Another Lions"}
        to={"/anotherlions"}
        fontSize={"1em"}
      />
    </Box>
  );

  const DrawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          width: drawerWidth,
          alignItems: "center",
          justifyContent: "center",
          // bgcolor: "rgb(240, 241, 244)",
        }}
      >
        <Box sx={{ width: "10%" }}>
          <GeneralButton buttonName={"home"} to={"/"} fontSize={"1em"} />
        </Box>
        <Box sx={{ width: "10%" }}>
          <DropdownMenuButton
            buttonName={"series"}
            fontSize={"1em"}
            content={DropdownContent}
          />
        </Box>
        <Box sx={{ width: "10%" }}>
          
          <GeneralButton
            buttonName={"about"}
            to={"/about"}
            fontSize={"1em"}
          />
        </Box>
        <Box sx={{ width: "10%" }}>
          <GeneralButton
            buttonName={"contacts"}
            to={"/contacts"}
            fontSize={"1em"}
          />
        </Box>
        
      </Box>
    </>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: drawerWidth,
          height: "15vh",
          justifyContent: 'space-between',
          alignItems: "center",
        }}
      >
        <Box sx={{ width: '30%', paddingLeft: 3 }}>
          <ArtistLogo />
        </Box>

        <Box sx={{ width: '70%', padding: 3, justifyItems: 'right'}}>
            <Socials/>
        </Box>
        
      </Box>

      <Box sx={{ width: drawerWidth, bgcolor: "#ffffff" }}>{DrawerContent}</Box>
    </>
  );
}
