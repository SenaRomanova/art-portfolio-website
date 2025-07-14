import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GeneralButton from './GeneralButton';



export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
    <Box sx={{ width: 250, alignitems: 'center'}} role="presentation" onClick={toggleDrawer(false)}>
      <List
        sx={{ width: '100%', maxWidth: 360, justifyContent: 'left'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Inna Romanova
          </ListSubheader>
        }>
          
        <ListItem><GeneralButton content={"artist"}/></ListItem>
        <ListItem><GeneralButton content={"about"}/></ListItem>
        <ListItem><GeneralButton content={"series"}/></ListItem>
        <ListItem><GeneralButton content={"contacts"}/></ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton size = "large" onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon 
          fontSize = "inherit" sx={
            {color: 'black', 
            "&:hover": {color: 'rgba(255, 37, 37, 0.83)'}, 
            '&:active': {color:'rgba(122, 0, 0, 0.92)'}}
          }/>
      </IconButton>
    
    <Drawer anchor = 'right' open = {open} onClose={toggleDrawer(false)}>{DrawerContent}</Drawer>
    </div>
  );
  
}