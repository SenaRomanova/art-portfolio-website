
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GeneralButton from './GeneralButton';
import DropdownMenuButton from './DropdownMenuButton';
import Typography from '@mui/material/Typography';
import '../assets/IRLogo.PNG'; // Adjust the path as necessary
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IRLogo from '../assets/IRLogo.PNG';


export const drawerWidth = 320;
export const drawerHeight = 600;
export default function Menu() {

  const DropdownContent = (
      <Box sx={{paddingTop: '1em', paddingLeft: '3em'}}>
            <GeneralButton buttonName= {'Nomadic Beauties'} to={'/nomadicbeauties'} fontSize={'1em'} />
            <GeneralButton buttonName= {'The Inner Fish'} to={'/theinnerfish'} fontSize={'1em'} />
            <GeneralButton buttonName= {'Totems & Talismans'} to={'/totemsandtalismans'} fontSize={'1em'} />
            <GeneralButton buttonName= {'Sirens'} to={'/sirens'} fontSize={'1em'} />
            <GeneralButton buttonName= {'The Penates (The Antique)'} to={'/thepenates'} fontSize={'1em'} />
            <GeneralButton buttonName= {'Another Lions'} to={'/anotherlions'} fontSize={'1em'} />
      </Box>);

  const Logo = (
    <Container sx={{display: 'flex', alignItems: 'center', width: drawerWidth, p: 2.5}}>
      <Box
          component="img"
          src={IRLogo}
          alt="Logo"
          sx={{
            paddingBottom: '0.5em',
            width: '55px',
            height: 'auto', 
          }}/>

      <Box sx={{display: 'flex', flexDirection: 'column', width: 'inherit', paddingLeft: '0.5em'}}>
        <Box sx={{display: 'flex', width: 'inherit', flexDirection: 'column'}}>
          <Typography variant="h5" sx={{ fontWeight: 100, textAlign: 'left', color: 'grey', wordSpacing: '0.7em'}}>
            I N N A
          </Typography>
        </Box>
        <Box sx={{width: '230px' , height: '2px', bgcolor: 'red'}}/>
        <Box sx={{display: 'flex', width: 'inherit', flexDirection: 'column'}}>
          <Typography variant="h4" sx={{fontWeight: 200, textAlign: 'left', color: '#000000'}}>
            ROMANOVA
          </Typography>
        </Box>
        <Box sx={{display: 'flex', width: 'inherit', flexDirection: 'column'}}>
          <Typography sx={{fontWeight: 100, fontSize: '1.5em', lineHeight: 0.5, textAlign: 'left', color: 'grey'}}>
            artist
          </Typography>
        </Box>
      </Box>
    </Container>
  )

  const DrawerContent = (
    <>
    {Logo}

    <Box sx={{width: drawerWidth, height: '10vh'}}/>

    <Box sx={{ display: 'flex', width: drawerWidth, alignContent: 'center', paddingLeft: '2.8em'}}>
      <List sx={{ width: '100%'}}component="nav">
        <ListItem><GeneralButton buttonName={"about"} to={'/'} fontSize={'1.2em'} paddingLeft={'1.5em'}/></ListItem>
        <ListItem><DropdownMenuButton buttonName={'series'} fontSize={'1.2em'} content={DropdownContent} paddingLeft={'1.5em'}/></ListItem>
        <ListItem><GeneralButton buttonName={"contacts"} to={'/contacts'} fontSize={'1.2em'} paddingLeft={'1.5em'}/></ListItem>
      </List>
    </Box>
    </>
  );

  return (
    // <div>
    //   <Drawer anchor = 'left' variant= 'permanent' sx={{'& .MuiDrawer-paper': {backgroundColor: '#ffffffff'}}}>{DrawerContent}</Drawer>
    // </div>
    <Box sx={{
      width: drawerWidth, height: '100vh', position: 'sticky', alignSelf: 'flex-start', bgcolor: '#ffffff'}}>
        {DrawerContent}

    </Box>
  );
  
}