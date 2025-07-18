
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GeneralButton from './GeneralButton';
import DropdownMenuButton from './DropdownMenuButton';


export const drawerWidth = 300; // Define the width of the drawer
export default function Menu() {

  const DropdownContent = (
      <Box>
            <GeneralButton buttonName= {'series example 1'} to={'/series'}/>
            <GeneralButton buttonName= {'series example 2'} to={'/series'}/>
            <GeneralButton buttonName= {'series example 3'} to={'/series'}/>
      </Box>);

  const DrawerContent = (
    <Box sx={{display: 'flex', width: drawerWidth, height: '100%'}}>
      <List
        sx={{ width: '100%'}}
        component="nav"
        >
        <ListItem><GeneralButton buttonName={"artist"} to={'/'}/></ListItem>
        <ListItem><GeneralButton buttonName={"about"} to={'/about'}/></ListItem>
        <ListItem><GeneralButton buttonName={"contacts"} to={'/contacts'}/></ListItem>
        <ListItem><DropdownMenuButton buttonName={'series'} content={DropdownContent}/></ListItem>

      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor = 'left' variant= 'permanent' sx={{'& .MuiDrawer-paper': {backgroundColor: '#ffffffff', borderRight: '1px solid'}}}>{DrawerContent}</Drawer>
    </div>
  );
  
}