
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GeneralButton from './GeneralButton';
import DropdownButton from './DropdownButton';



export default function Menu() {

  const DropdownContent = (
        <Box sx={{display: 'flex', justifyContent: 'center'}}> 
          <List>
            <ListItem><GeneralButton content={"Example Series 1"}/></ListItem>
            <ListItem><GeneralButton content={"Series 2"}/></ListItem>
            <ListItem><GeneralButton content={"Series 3"}/></ListItem>
          </List>
        </Box>);

  const DrawerContent = (
    <Box sx={{display: 'flex', width: 300, height: '100%', alignItems: 'center'}}>
      <List
        sx={{ width: '100%', maxWidth: 500}}
        component="nav"
        >
          
        <ListItem><GeneralButton content={"artist"}/></ListItem>
        <ListItem><GeneralButton content={"about"}/></ListItem>
        <ListItem><GeneralButton content={"contacts"}/></ListItem>
        
        <ListItem><DropdownButton content={'series'}/></ListItem>

      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor = 'left' variant= 'permanent' sx={{'& .MuiDrawer-paper': {backgroundColor: '#c7c7c7ff'}}}>{DrawerContent}</Drawer>
    </div>
  );
  
}