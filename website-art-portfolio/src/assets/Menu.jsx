
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GeneralButton from './GeneralButton';
import DropdownMenuButton from './DropdownMenuButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

export const drawerWidth = 350; // Define the width of the drawer
export default function Menu() {

  const DropdownContent = (
      <Box sx={{paddingTop: '1em'}}>
            <GeneralButton buttonName= {'Nomadic Beauties'} to={'/nomadicbeauties'} fontSize={'1em'} paddingLeft={'4em'}/>
            <GeneralButton buttonName= {'The Inner Fish'} to={'/theinnerfish'} fontSize={'1em'} paddingLeft={'4em'} />
            <GeneralButton buttonName= {'Totems & Talismans'} to={'/totemsandtalismans'} fontSize={'1em'} paddingLeft={'4em'}/>
            <GeneralButton buttonName= {'Sirens'} to={'/sirens'} fontSize={'1em'} paddingLeft={'4em'}/>
            <GeneralButton buttonName= {'The Penates (The Antique)'} to={'/thepenates'} fontSize={'1em'} paddingLeft={'4em'}/>
            <GeneralButton buttonName= {'Another Lions'} to={'/anotherlions'} fontSize={'1em'} paddingLeft={'4em'}/>
      </Box>);

  const Logo = (
    <Container sx={{display: 'flex', flexDirection: 'column', padding: '1em', width: drawerWidth}}>

      <Box sx={{display: 'flex', width: drawerWidth, flexDirection: 'column'}}>
            <Typography variant="h4" sx={{ fontWeight: 100, textAlign: 'left', color: 'grey', wordSpacing: '0.5em'}}>
              I N N A
            </Typography>
      </Box>

      <Box sx={{width: '100%', height: '2px', bgcolor: 'red'}}/>

      <Box sx={{display: 'flex', width: drawerWidth, flexDirection: 'column'}}>
        <Typography variant="h3" sx={{fontWeight: 200, textAlign: 'left', color: '#000000'}}>
          ROMANOVA
        </Typography>
        <Typography variant="h4" sx={{fontWeight: 200, textAlign: 'left', color: 'grey'}}>
          artist
        </Typography>
      </Box>

    </Container>
  )

  const DrawerContent = (
    <>
    {Logo}
    <Box sx={{display: 'flex', width: drawerWidth, height: '100%'}}>
      <List sx={{ width: '100%'}}component="nav">
        <ListItem><GeneralButton buttonName={"Artist"} to={'/'} fontSize={'1.5em'} paddingLeft={'1.5em'}/></ListItem>
        <ListItem><GeneralButton buttonName={"About"} to={'/about'} fontSize={'1.5em'} paddingLeft={'1.5em'}/></ListItem>
        <ListItem><GeneralButton buttonName={"Contacts"} to={'/contacts'} fontSize={'1.5em'} paddingLeft={'1.5em'}/></ListItem>
        <ListItem><DropdownMenuButton buttonName={'Series'} content={DropdownContent} paddingLeft={'1.5em'}/></ListItem>
      </List>
    </Box>
    </>
  );

  return (
    <div>
      <Drawer anchor = 'left' variant= 'permanent' sx={{'& .MuiDrawer-paper': {backgroundColor: '#ffffffff', borderRight: '1px solid'}}}>{DrawerContent}</Drawer>
    </div>
  );
  
}