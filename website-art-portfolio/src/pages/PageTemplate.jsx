
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import OverlayWindow from "../assets/OverlayWindow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";


export default function Template({thumbnails, thumbnailNames, thumbnailDescriptions, detailedCatalogueList, descriptionList, materialsList}) {
    
    const [open, setOpen] = useState(false);
    const [id, setID] = useState(-1);

    const gridElement = (image, name, description, id) => (
        <Card  sx={{ minWidth: 200 }}>
            <CardContent sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>

                <Stack sx={{width: '100%', height: '100%', display: 'flex', cursor: "pointer"}}
                    onClick={() => {
                        setID(id);
                        setOpen(true); 
                    }}>
                    
                    
                        <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <Box
                            component="img"
                            src={image}
                            alt="Image"
                            sx={{
                                width: '90%',
                                borderRadius: 1,
                                height: 'auto', 
                                alignContent: 'center',
                                justifyContent: 'center',
                            }}/>
                        </Box>

                    <Stack sx={{display: 'flex', width: '100%', height: '100%', justifyContent: 'flex-end'}}>
                        <Typography variant="h5" sx={{ textAlign: 'right', color: 'grey'}}>
                            {name}
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'right', color: 'grey'}}>
                            {description}
                        </Typography>
                    </Stack>

                </Stack>
                
                <Divider variant="middle" sx={{width: '100%', justifySelf: 'center'}}/>
            </CardContent>
        </Card>
    );


    return(
        <>

            {/* <Box sx={{width: '100%'}}>
                <Grid container spacing={1} columnSpacing={1} sx={{justifyContent: 'center', alignContent: 'center'}}>
                    {thumbnails.map((image, index) => (
                        <Grid item xs={12} md={6} key={index}>
                        {gridElement(
                            image,
                            thumbnailNames[index],
                            thumbnailDescriptions[index],
                            index
                        )}
                        </Grid>
                    ))}
                </Grid>
            </Box> */}
            <Box sx={{width: '100%'}}>
                <Grid container spacing={1} columnSpacing={1} sx={{justifyContent: 'center', alignContent: 'center'}}>
                        <Grid size={ {xs: 12, md: 5, lg: 4} }>
                            <Typography variant="h5" component="div" color='black'>heh</Typography>
                            <Typography variant="h5" component="div" color='black'>heh</Typography>
                            <Typography variant="h5" component="div" color='black'>heh</Typography>
                            <Typography variant="h5" component="div" color='black'>heh</Typography>
                        </Grid>
                </Grid>
            </Box>
            

            
            

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-title"
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backdropFilter: 'blur(5px)',
                    position: 'fixed'
                }}
                >
                    
                    <ClickAwayListener>

                            <OverlayWindow imageList={detailedCatalogueList[id]} description={descriptionList[id]} materials={materialsList[id] } onClose={() => setOpen(false)}/>

                    </ClickAwayListener>
            </Modal>

        </>
        
    );

}