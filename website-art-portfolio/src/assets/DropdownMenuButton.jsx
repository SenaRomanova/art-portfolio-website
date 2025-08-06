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
    <>
      <Button
        disableRipple
        onClick={toggleMenu} variant='text' color='white' sx= {
        {display: 'flex', 
        fontSize: {fontSize} || '1em', 
        color: '#858585ff',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '10%', 
        paddingLeft: {paddingLeft} || 0, 
        textTransform: 'none', 
        '&:hover': 
        {color: '#cb0000ff'}}
      }>
        
        {buttonName} {/* move this lower to have the icon be on the left */}
        {!open && <KeyboardArrowRightIcon fontSize='small' sx={{ ml: 1 }}/>}
        {open && (<KeyboardArrowDownIcon fontSize='small' sx={{ ml: 1 }}/>)} 


      </Button>
       {open && content}
    </>
  );
}
