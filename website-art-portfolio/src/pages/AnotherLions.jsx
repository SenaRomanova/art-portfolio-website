import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FishCover from "../assets/FishCover.jpg"; 
import IRLogo from "../assets/IRLogo.PNG";
import Stack from "@mui/material/Stack";

export default function AnotherLions() {
    return(
        <Stack sx={{justifyContent: "center",  alignItems: "center", width: '100%'}}>

        <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center", padding: 2}}>
            <Typography variant="h2" color="grey"> Another Lions </Typography>
        </Box>

        <Box sx={{ bgcolor: 'white', display: "flex", justifyContent: "center",  alignItems: "center", width: '50vw', padding: 2}}> 
            <Box
            component={"img"}
            src={IRLogo}
            alt="Logo"
            sx={{
                height: 360, 
                width: 'auto',
                position: 'relative',
                alignContent: 'center',
                justifyContent: 'center',
            }}
            />
        </Box>

        <Box sx={{ bgcolor: 'white'}}>
            <ImageList variant="standard" cols={4} rowHeight={90} gap={30} sx={{display: 'flex', justifyContent: "center",  alignItems: "center", width: '100%'}}>
                <ImageListItem key="image1" sx={{width: 90}}>
                    <img src={FishCover} alt="Art 1" />
                </ImageListItem>
                <ImageListItem key="image2" sx={{width: 90}}>
                    <img src={FishCover} alt="Art 2" />
                </ImageListItem>
                <ImageListItem key="image3" sx={{width: 90}}>
                    <img src={FishCover} alt="Art 3" />
                </ImageListItem>
                <ImageListItem key="image4" sx={{width: 90}}>
                    <img src={FishCover} alt="Art 4" />
                </ImageListItem>

            </ImageList>
        </Box>

        
        </Stack>
    );
}