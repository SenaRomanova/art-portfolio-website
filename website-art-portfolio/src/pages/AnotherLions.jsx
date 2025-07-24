import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ScrollableGallery from "../assets/ScrollableGallery";

export default function AnotherLions() {
    return(
        <Box sx={{justifyContent: 'space-between',  alignItems: "center", width: '100%'}}>

            <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center", margin: 5}}>
                <Typography variant="h3" color="grey"> Another Lions </Typography>
            </Box>

            <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center", margin: 5}}>
                <ScrollableGallery/>
            </Box>

            {/* <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center"}}>
                <Typography variant="h5" color="grey"> Another Lions </Typography>
            </Box> */}


        {/* <Box sx={{ bgcolor: 'black', display: "flex", justifyContent: "center",  alignItems: "center", width: '50vw', padding: 2, height: 5000}}>
            hi
        </Box> */}

        
        </Box>
    );
}