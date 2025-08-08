import { Box, Container, Typography } from "@mui/material";
import Socials from "./Socials";

import { Route, Routes } from "react-router-dom";
import GeneralButton from "./GeneralButton";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "rgb(240, 241, 244)",
        borderTop: '1px solid black',
        width: "100%",
        minHeight: "25vh",
        justifyContent: 'space-between',
        padding: 3
      }}
    >
      <Box sx={{ width: '50%', justifyItems: 'left' }}>
        <Typography variant="body2" color="text.secondary" sx={{padding: 1}}>
          © {new Date().getFullYear()} Inna Romanova. All rights reserved.
        </Typography>

        <Box sx={{ display: 'flex', width: '100%'  }}>
          <GeneralButton buttonName={"Terms of Service"} to={"/tos"} /> 
          <GeneralButton buttonName={"Privacy Policy"} to={"/privacy-policy"} />
          <GeneralButton buttonName={"Refund Policy"} to={"/refund-policy"} />
        </Box>
      </Box>



      <Box sx={{ width: '50%', justifyItems: 'right' }}>
        <Typography variant="body2" color="text.secondary" textAlign={'right'}> Follow Inna Romanova on Socials: </Typography>
        <Socials />
      </Box>
    </Box>
  );
}
