import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FishCover from "../assets/FishCover.jpg";
import IRLogo from "../assets/IRLogo.PNG";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ScrollableGallery({imgUrls}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    imgUrls = imgUrls || []; // Default images if none provided
    
    return(
        <>

        <Stack sx={{display: "flex", justifyContent: "center",  alignItems: "center", padding: 2, width: 700, height: 400}}> 
            <Container sx={{display: "flex", justifyContent: "center",  alignItems: "center"}}>

                <Box sx={{height: '300px', width: '40px', position: 'relative', alignContent: 'center'}}>
                    <IconButton
                        onClick={() => setSelectedIndex((selectedIndex + imgUrls.length - 1) % imgUrls.length)}
                        sx={{color: 'white', alignItems: 'center', justifyContent: 'center', width: 'inherit', height: 'inherit', borderRadius: 1}}>
                        <ArrowBackIosIcon sx={{color: 'black', '&:hover':{color: 'red'}}}/>
                    </IconButton>
                </Box>

                <Box sx={{display: 'flex', height: 'inherit', width: 'inherit', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
                    <Box
                        component={"img"}
                        src={imgUrls[selectedIndex]}
                        alt="Logo"
                        sx={{
                            height: 360, 
                            width: 'auto',
                            marginBottom: 3,
                            marginTop: 3,
                            position: 'relative',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                        />
                </Box>

                <Box sx={{height: '300px', width: '40px', position: 'relative', alignContent: 'center'}}>
                    <IconButton
                        onClick={() => setSelectedIndex((selectedIndex + 1) % imgUrls.length)}
                        sx={{color: 'white', alignItems: 'center', justifyContent: 'center', width: 'inherit', height: 'inherit', borderRadius: 1}}>
                        
                        <ArrowForwardIosIcon sx={{color: 'black', '&:hover':{color: 'red'}}}/>
                    </IconButton>
                </Box>

            </Container>
            
            

            <Box sx={{ bgcolor: 'white'}}>
                <ImageList variant="standard" cols={4} rowHeight={90} gap={30} sx={{display: 'flex', justifyContent: "center",  alignItems: "center", width: '100%'}}>
                    
                    {imgUrls.map((url, index) => (
                    <ImageListItem 
                        key={index} 
                        sx={{width: 90, height: 90, objectFit: "cover", borderRadius: 1, border: selectedIndex === index ? '1px solid rgba(0, 0, 0, 0.54)' : 'none'}}>
                            <img src={url} alt="Art 1"
                                onClick={() => setSelectedIndex(index)}/>
                    </ImageListItem>
                ))}

                </ImageList>
            </Box>
        </Stack>
        </>

    );
}