import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Stack } from '@mui/material';

export default function DropdownMenuButtonPhone({ buttonName, content,paddingLeft }) {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <Stack sx={{display: 'flex', width: '100%', alignItems: 'start'}}>
        <Button
          disableRipple
          onClick={toggleMenu}
          variant='text' color='white' sx= {
          {display: 'flex',  
          color: '#858585ff', 
          paddingLeft: {paddingLeft} || 0, 
          textTransform: 'none', 
          '&:hover': 
          {color: '#cb0000ff'}}
        }>
          
          {buttonName} {/* move this lower to have the icon be on the left */}
          {!open && <KeyboardArrowRightIcon fontSize='small' sx={{ ml: 1 }}/>}
          {open && (<KeyboardArrowDownIcon fontSize='small' sx={{ ml: 1 }}/>)} 


        
          </Button>

        {open && <Box 
          sx={{bgcolor: 'white', borderRadius: 2, justifyContent: 'left'}}> {content} </Box>}
      </Stack>
      
    </>
  );
}
