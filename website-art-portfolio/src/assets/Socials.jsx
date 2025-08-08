import React from 'react';
import { IconButton, Tooltip, Container, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';

export default function Socials(){
    return(
        <Box  sx={{ justifyContent: "right",  alignItems: "center"}}>
            
            <Tooltip title="Follow Inna Romanova on Instagram">
            <IconButton 
                size="large"
                component="a" 
                href="https://www.instagram.com/innainnaromanova/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                    width: 50, //clickable area
                    height: 50,
                    color: "grey",
                }}
            >
                {/* visual */}
                <InstagramIcon fontSize="68"  /> 
            </IconButton>
        </Tooltip>

        <Tooltip title="Follow Inna Romanova on Facebook">
            <IconButton 
                size="large"
                component="a" 
                href="https://www.facebook.com/innainnaromanova" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                    width: 50, //clickable area
                    height: 50,
                    color: "grey",
                }}

            >
                <FacebookIcon fontSize="68" />
            </IconButton>
        </Tooltip>
        </Box>
    );
}