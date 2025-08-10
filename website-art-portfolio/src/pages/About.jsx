import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import InnaRomanova from "./../assets/ImageCatalogue/about me/460124_376771295714809_1735044073_o.jpg";
import BottomNavigation from "@mui/material/BottomNavigation";
import AltaiSun from "./../assets/ImageCatalogue/NomadicBeauty/AltaiSun.jpg";
import PageHeader from "../assets/PageHeading";
import { baseTheme } from "../assets/AppTheme";

export default function About() {

  return (

    <Container sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%'}}>
      <PageHeader name={"Meet the Artist"} />

      <Container sx={{
        display: 'flex', flexDirection: 'column', width: '100%', mb: 5,
        alignItems: 'center',
        [baseTheme.breakpoints.up('md')]: {
          flexDirection: 'row'
        }

      }}>

        <Avatar
          alt="Inna Romanova"
          src={InnaRomanova}
          sx={{
            justifySelf: 'center',
            mb: 2,
            [baseTheme.breakpoints.up('md')]: {
              justifySelf: 'left',
              mb: 0
            }
          }}
        />

        <Typography variant="h5" color="black" textAlign={'justify'}
          sx={{
            justifySelf: 'center',
            [baseTheme.breakpoints.up('md')]: {
              justifySelf: 'right',
              padding: 5,
            }
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

      </Container>

      <Container sx={{mb: 5}}>
        <Typography variant="h4" color="black" sx={{mb: 2}}>Personal Statement</Typography>

        <Typography variant="body1" color="black" textAlign={'justify'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>

      <Container sx={{mb: 5}}>
        
        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%', mb: 3, 
          alignItems: 'center', 
          [baseTheme.breakpoints.up('md')]: {
            flexDirection: 'row'
          }

        }}>

          <Box>
          <Typography variant="h4" color="black" sx={{mb: 2}}>Technique</Typography>
          <Typography variant="body1" color="black" textAlign={'justify'}>
            iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          </Box>
          <Container
            component={"img"}
            src={AltaiSun}
            alt="Logo"
            sx={{
              height: 400,
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              padding: 1,
              borderRadius: 1,
              [baseTheme.breakpoints.up('lg')]: {
                height: 350,
                marginLeft: { xs: 0, sm: 3 },
              }
            }}
          />
        </Box>
      </Container>
    </Container>
  );
}
