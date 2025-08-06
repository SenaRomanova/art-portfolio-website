import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contacts() {
    return(
        <>

        <Box sx={{display: 'flex', width: '100%', margin: 3, marginTop: '5vh', justifyContent: 'center'}}>
            <Typography variant="h2" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> Contacts </Typography>
        </Box>

        <Container sx={{display: "flex", justifyContent: "left",  alignItems: "center", padding: 2}}>
            <Typography variant="h4" color="grey">Socials</Typography>
        </Container>

        <Container sx={{display: "flex", justifyContent: "left",  alignItems: "center", padding: 2}}>
            
            <Tooltip title="Follow Inna Romanova on Instagram">
            <IconButton 
                size="large"
                component="a" 
                href="https://www.instagram.com/innainnaromanova/" 
                target="_blank" 
                rel="noopener noreferrer"
                color="black"
            >
                <InstagramIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Follow Inna Romanova on Facebook">
            <IconButton 
                size="large"
                component="a" 
                href="https://www.facebook.com/innainnaromanova" 
                target="_blank" 
                rel="noopener noreferrer"
                color="black"
            >
                <FacebookIcon />
            </IconButton>
        </Tooltip>
        </Container>

        </>
        
    );
}