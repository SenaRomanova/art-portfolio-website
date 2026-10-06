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
        <Typography variant="h4" color="black" sx={{mb: 2}}>Artist's Statement</Typography>

        <Typography variant="body1" color="black" textAlign={'justify'}>
          Dear viewer! I would like to share a little about the works presented here. As you can probably tell from the choice of subjects, they reflect my deep interest in history, archaeology, and ethnography. In museums, I have always been drawn to exhibits that weren't fully restored, but rather conserved: those bearing every scuff, scratch, dent, and loss. It is as if they weren’t made by human hands alone; time itself acted as a co-creator. I remember looking at an ancient manuscript once. Following museum archival rules, it was pressed between two sheets of glass, and in its extreme fragility, it was simply breathtaking. To my eyes, the uneven, frayed edges, the water stains, and the blemishes didn't ruin it at all! Quite the opposite, in fact. That was precisely when I realized that only paper would allow me to look beyond my usual graphic materials and explore so much more. Multi-layering, cutouts, torn edges, stitches, and rivets — all of these would become equal tools in creating the image. There is something thrilling about building your own new 'canvas' out of several sheets of paper — sometimes old, and varied in texture — and then drawing as if completely ignoring the fact that it was once torn apart (you can trace the relation to human psychology here!).
        </Typography>
        <Typography variant="body1" color="black" textAlign={'justify'} sx={{mt: 2}}>
           A quick note on the materials: with this technique, there is always a risk of the piece slipping into looking 'gimmicky' or like a stage prop, which is the last thing I want. I don’t try to artificially age the surface or add texture using pre-made hobby kits. Simulating a specific material isn't the goal either. What matters more is leaving an overall impression of working with a complex, diverse texture: paper and metal, 'glass-like' varnishes and matte paint, clean lines and ragged contours. Not just a flat paper surface, but its multi-layered depth and rich variety of textures within a single piece — just like in life. 
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
