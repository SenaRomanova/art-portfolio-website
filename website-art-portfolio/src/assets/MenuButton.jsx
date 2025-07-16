
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GeneralButton from './GeneralButton';
import Divider from '@mui/material/Divider';



export default function Menu() {
  const DrawerContent = (
    <Box sx={{display: 'flex'}} role="presentation">
      <Divider/>
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
      <Drawer anchor = 'left' variant= 'permanent' sx={{'& .MuiDrawer-paper': {backgroundColor: '#c7c7c7ff'}}}>{DrawerContent}</Drawer>
    </div>
  );
  
}