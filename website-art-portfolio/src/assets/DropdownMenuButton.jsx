import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRef } from 'react';
import { useTheme } from '@emotion/react';
import { baseTheme } from './AppTheme';

export default function DropdownMenuButton({ buttonName, content,paddingLeft }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const closeTimeoutRef = useRef(null);
  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
  closeTimeoutRef.current = setTimeout(() => {
    setOpen(false);
    }, 300);
  };

  return (
    <>
      <Button
        disableRipple
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant='text' color='white' sx= {
        {
        ...theme.typography.button,
        display: 'flex',  
        color: '#858585ff',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        paddingLeft: {paddingLeft} || 0, 
        textTransform: 'none', 
        '&:hover': 
        {color: '#cb0000ff'}}
      }>
        
        {buttonName} {/* move this lower to have the icon be on the left */}
        {!open && <KeyboardArrowRightIcon sx={{ml: 1, 
              [baseTheme.breakpoints.up("xs")]: { fontSize: "2.2rem" },
              [baseTheme.breakpoints.up("md")]: { fontSize: "1.8rem" },
              [baseTheme.breakpoints.up("lg")]: { fontSize: "1.4rem" },}}/>}
        {open && (<KeyboardArrowDownIcon fontSize='small' sx={{ml: 1, 
              [baseTheme.breakpoints.up("xs")]: { fontSize: "2.2rem" },
              [baseTheme.breakpoints.up("md")]: { fontSize: "1.8rem" },
              [baseTheme.breakpoints.up("lg")]: { fontSize: "1.4rem" },}}/>)} 


      </Button>

       {open && <Box 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{bgcolor: 'white', position: 'absolute', zIndex: 500, borderRadius: 2}}> {content} </Box>}
    </>
  );
}
