import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ScrollableGallery from "../assets/ScrollableGallery";
import FishCover from "../assets/FishCover.jpg";
import FishProcess from "../assets/FishProcess.jpg";
import ExampleDetail1 from "../assets/ExampleDetail1.png";
import ExampleDetail2 from "../assets/ExampleDetail2.png";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import IRLogo from "../assets/IRLogo.PNG";
import { Form } from "react-router-dom";

export default function Template() {
    const imgUrls = [
        FishCover,
        FishProcess,
        ExampleDetail1,
        ExampleDetail2
    ];

    return(
        <>
        <Stack sx={{display: 'flex'}}>

            <Box sx={{display: "flex", justifyContent: "left",  alignItems: "center", margin: 5}}>
                <Typography variant="h3" color="grey">  The Renaissance Fish </Typography>
            </Box>


            <Box sx={{display: "flex", justifyContent: "space-between",  alignItems: "top",  margin: 2, padding: 3}}>

                <Box sx={{display: "flex", justifyContent: "left",  alignItems: "center", width: 'inherit'}}>
                    <ScrollableGallery imgUrls={imgUrls}/>
                </Box>
                
                <Stack sx={{display: "flex", justifyContent: "center", padding: 1}}>
                    <Box sx={{display: "flex", width: '100%', justifyContent: "left"}}>
                        <FormatQuoteIcon sx={{color: 'grey', fontSize: '2em'}}/>
                    </Box>
                    <Typography variant="h5" color="grey" sx={{padding: 2, textAlign: 'justify'}}>
                        Let yourself dive deep into the mystical world where soul and art intertwine, and discover the beauty of our first shape, the very first container of the world, the Renaissance Fish.
                    </Typography>
                    <Box sx={{display: "flex", width: '100%', justifyContent: "right"}}>
                        <FormatQuoteIcon sx={{color: 'grey', fontSize: '2em'}}/>
                    </Box>
                </Stack>

            </Box>

            <Box sx={{width: '100%' , height: '10vh'}}/>


        </Stack>
        <Stack sx={{display: "flex", justifyContent: "center",  alignItems: "center", color: 'grey', width: '90%'}}>
                <Typography variant="h5" sx={{textAlign: 'Left', width: 'inherit', paddingBottom: 2}}>
                    Description:
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'justify', width: 'inherit', paddingBottom: 4}}>
                     The Renaissance Fish is a conceptual piece that explores the intersection of art and spirituality. It represents the idea of rebirth and transformation, drawing inspiration from the rich history of Renaissance art while incorporating modern elements.
                </Typography>

                <Typography variant="h5" sx={{textAlign: 'Left', width: 'inherit', paddingBottom: 2}}>
                    Materials:
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'justify', width: 'inherit', paddingBottom: 4}}>
                     Woven out of a variety of materials, including layers of hand-stained natural paper, and acrylic paint.
                </Typography>
                
        </Stack>
        </>
    );
}