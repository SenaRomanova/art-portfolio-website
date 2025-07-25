import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ScrollableGallery from "../assets/ScrollableGallery";
import FishCover from "../assets/FishCover.jpg";
import IRLogo from "../assets/IRLogo.PNG";

export default function Template() {
    const imgUrls = [
        IRLogo,
        FishCover,
        IRLogo,
        FishCover,
        IRLogo
    ];

    return(
        <Stack sx={{display: 'flex'}}>

            <Box sx={{display: "flex", justifyContent: "left",  alignItems: "center", margin: 5}}>
                <Typography variant="h3" color="grey">  This is a template </Typography>
            </Box>


            <Box sx={{display: "flex", justifyContent: "space-between",  alignItems: "top",  margin: 2}}>
                <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center",}}>
                    <ScrollableGallery imgUrls={imgUrls}/>
                </Box>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="h5" color="grey">
                        This is a template page. You can use it to create new pages for your portfolio. </Typography>
                </Box>
            </Box>

        </Stack>
    );
}