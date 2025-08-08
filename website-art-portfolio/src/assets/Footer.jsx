import { Box, Typography } from "@mui/material";
import Socials from "./Socials";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "rgb(240, 241, 244)",
        borderTop: '1px solid black',
        width: "100%",
        height: "20vh",
        justifyContent: 'space-between',
        padding: 3
      }}
    >
        <Box sx={{width: '50%'}}>
            <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Inna Romanova. All rights reserved.
        </Typography>

        </Box>
        

        <Box sx={{width: '50%', justifyItems: 'right'}}>
            <Typography variant="body2" color="text.secondary" textAlign={'right'}> Follow Inna Romanova on Socials: </Typography>
            <Socials/>
        </Box>
    </Box>
  );
}
