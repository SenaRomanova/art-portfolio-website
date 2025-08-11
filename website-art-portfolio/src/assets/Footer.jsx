import { Box, Container, Typography } from "@mui/material";
import Socials from "./Socials";

import { Route, Routes } from "react-router-dom";
import GeneralButton from "./GeneralButton";
import { baseTheme } from "./AppTheme";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "rgb(240, 241, 244)",
        borderTop: '1px solid grey',
        width: "100%",
        minHeight: "25vh",
        justifyContent: 'center',
        padding: 3
      }}
    >
      <Box sx={{display: "flex", width: '100%',
        maxWidth: 1800, justifyContent: 'space-evenly'}}>

      
      <Box sx={{justifyContent: 'left' }}>
        <Typography variant="body1" color="text.secondary" sx={{padding: 1}}>
          © {new Date().getFullYear()} Inna Romanova. All rights reserved.
        </Typography>

        <Box sx={{
          display: 'flex', 
          width: '100%',
          flexDirection: 'column',
          alignItems: 'flex-start'
          }}>
          <GeneralButton buttonName={"Terms of Service"} to={"/tos"} /> 
          <GeneralButton buttonName={"Privacy Policy"} to={"/privacy-policy"} />
          <GeneralButton buttonName={"Refund Policy"} to={"/refund-policy"} />
        </Box>
      </Box>



      <Box sx={{ justifyItems: 'right' }}>
        <Typography variant="body1" color='grey' textAlign={'right'}> Follow Inna Romanova on Socials: </Typography>
        <Socials />
      </Box>
      </Box>
    </Box>
  );
}
