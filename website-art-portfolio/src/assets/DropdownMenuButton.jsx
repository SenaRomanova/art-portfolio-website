import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GeneralButton from './GeneralButton';

export default function DropdownMenuButton({ buttonName, content, fontSize, paddingLeft }) {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Box sx={{width: '100%'}} >
      <Button
        disableRipple
        onClick={toggleMenu} variant='text' color='white' sx= {
        {display: 'inline-flex', 
        fontSize: {fontSize} || '1em', 
        alignItems: 'center', 
        justifyContent: 'left', 
        width: '100%', 
        paddingLeft: {paddingLeft} || '4vw', 
        textTransform: 'none', 
        '&:hover': 
        {color: '#cb0000ff'}}
      }>
        
        {buttonName} {/* move this lower to have the icon be on the left */}
        {!open && <KeyboardArrowRightIcon sx={{ ml: 1 }}/>}
        {open && (<KeyboardArrowDownIcon sx={{ ml: 1 }}/>)} 


      </Button>
      
       {open && content}
    </Box>
  );
}
