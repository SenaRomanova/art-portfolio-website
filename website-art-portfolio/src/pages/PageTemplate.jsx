
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FishCover from "../assets/FishCover.jpg";
import FishProcess from "../assets/FishProcess.jpg";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { useState } from "react";
import OverlayWindow from "../assets/OverlayWindow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";


export default function Template({thumbnails, thumbnailNames, thumbnailDescriptions, detailedCatalogueList, descriptionList, materialsList}) {
    
    const [open, setOpen] = useState(false);
    const [id, setID] = useState(-1);

    const gridElement = (image, name, description, id) => (
        <>
            <Box sx={{width: '90%', height: '20vh', margin: 2, borderRadius: 1, display: 'flex', alignItems: 'center', '&:hover': {borderColor: 'red'}, 
                cursor: "pointer"}}
                onClick={() => {
                    setID(id);
                    setOpen(true); 
                  }}>
                
                <Container sx={{display: 'flex', width: '20%', alignContent: 'center', justifyContent: 'center'}}>
                    <Box
                        component="img"
                        src={image}
                        alt="Image"
                        sx={{
                            margin: 1,
                            paddingBottom: '0.5em',
                            width: 'auto',
                            borderRadius: 1,
                            height: '18vh', 
                            alignContent: 'center',
                            justifyContent: 'center',
                            position: 'static',
                        }}/>
                </Container>
                <Stack sx={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 2}}>
                    <Typography variant="h4" sx={{ width: '90%', height: '90%', textAlign: 'right', color: 'black'}}>
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{ width: '90%', height: '90%', textAlign: 'right', color: 'black'}}>
                        {description}
                    </Typography>
                </Stack>
            </Box>
            
            <Divider component="li" variant="middle"/>

            
        </>
    );


    return(
        <>

            {thumbnails.map((image, index) => gridElement(image, thumbnailNames[index], thumbnailDescriptions[index], index))}

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-title"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backdropFilter: 'blur(5px)',
                    position: 'fixed'
                }}
                >
                    <ClickAwayListener>

                        <OverlayWindow imageList={detailedCatalogueList[id]} description={descriptionList[id]} materials={materialsList[id]}/>

                    </ClickAwayListener>
            </Modal>

        </>
        
    );

}