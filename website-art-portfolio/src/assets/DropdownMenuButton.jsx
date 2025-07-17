import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GeneralButton from './GeneralButton';

export default function DropdownMenuButton({ buttonName, content }) {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Box sx={{width: '100%'}} >
      <Button
        disableRipple
        onClick={toggleMenu} variant='text' color='white' sx= {
        {display: 'inline-flex', 
        fontSize: '1.5em', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        padding: 1, 
        textTransform: 'none', 
        '&:hover': 
        {color: '#cb0000ff'}}
      }>
        
        {!open && <KeyboardArrowRightIcon sx={{ mr: 1 }}/>}
        {open && (<KeyboardArrowDownIcon sx={{ mr: 1 }}/>)} 

        {buttonName}

      </Button>
      
       {open && content}
    </Box>
  );
}
