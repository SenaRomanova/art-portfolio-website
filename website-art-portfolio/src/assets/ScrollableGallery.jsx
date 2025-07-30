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

        <Stack sx={{display: "flex", justifyContent: "center",  alignItems: "center", marginTop: 5, width: '100%', height: 'auto'}}> 
            <Container sx={{display: "flex", flexDirection: 'row', width: '100%', justifyContent: 'center',  alignItems: "center"}}>

                <Box sx={{display: 'flex', flexShrink: 1, height: '300px', width: '5vw', alignContent: 'center'}}>
                    <IconButton
                        onClick={() => setSelectedIndex((selectedIndex + imgUrls.length - 1) % imgUrls.length)}
                        sx={{color: 'white', alignItems: 'center', justifyContent: 'center', width: 'inherit', height: 'inherit', borderRadius: 1}}>
                        <ArrowBackIosIcon sx={{color: 'black', '&:hover':{color: 'red'}}}/>
                    </IconButton>
                </Box>

                <Box sx={{display: 'flex', height: 'inherit', width: 'inherit', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
                    <Box
                        component={"img"}
                        src= {selectedIndex === -1? imgUrls[0] : imgUrls[selectedIndex]}
                        alt="Logo"
                        sx={{
                            display: 'flex',
                            height: '60vh',
                            width: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            marginBottom: 3,
                            marginTop: 3,
                            position: 'relative',
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderRadius: 1,
                        }}
                        />
                </Box>

                <Box sx={{display: 'flex', flexShrink: 1, height: '300px', width: '5vw', alignContent: 'center'}}>
                    <IconButton
                        onClick={() => setSelectedIndex((selectedIndex + 1) % imgUrls.length)}
                        sx={{color: 'white', alignItems: 'center', justifyContent: 'center', width: 'inherit', height: 'inherit', borderRadius: 1}}>
                        
                        <ArrowForwardIosIcon sx={{color: 'black', '&:hover':{color: 'red'}}}/>
                    </IconButton>
                </Box>

            </Container>
            
            

            <Box sx={{ display: 'flex', width: 'auto', height: 'auto', bgcolor: 'white'}}>
                <ImageList variant="standard" cols={4} rowHeight={90} gap={30} sx={{display: 'flex', justifyContent: "center",  alignItems: "center", width: '100%'}}>
                    
                    {imgUrls.map((url, index) => (
                    <ImageListItem 
                        key={index} 
                        sx={{width: 90, height: 90, objectFit: "cover", borderRadius: '5px' ,border: selectedIndex === index ? '1px solid rgba(0, 0, 0, 0.54)' : 'none'}}>
                            <img src={url} alt="Art 1"
                                style={{borderRadius: 5, cursor: 'pointer', width: 'auto', height: '100%'}}
                                onClick={() => setSelectedIndex(index)}/>
                    </ImageListItem>
                ))}

                </ImageList>
            </Box>
        </Stack>
        </>

    );
}