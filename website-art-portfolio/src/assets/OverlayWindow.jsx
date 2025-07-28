import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import FishCover from './FishCover.jpg';
import FishProcess from './FishProcess.jpg';
import ExampleDetail1 from './ExampleDetail1.png';
import ExampleDetail2 from './ExampleDetail2.png';
import ScrollableGallery from './ScrollableGallery';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";

export default function OverlayWindow({imageList, isOpen}) {
    
    const width = '90vw';
    const height = '90vh';
    const imgUrls = imageList ||[
    ];

    const [open, setOpen] = useState(isOpen);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dialogueContent =(

        <>
            <Stack sx={{display: 'flex', position: 'static', marginTop: '20vh', marginBottom: '10vh', width: '100%', height: '100%'}}>

                <Box sx={{display: "flex", width: 'inherit', justifyContent: "left",  alignItems: "center"}}>
                        <ScrollableGallery imgUrls={imgUrls}/>
                </Box>
            </Stack>


            <Stack sx={{display: "flex", justifyContent: "center",  position: 'static', alignItems: "center", color: 'grey', width: '90%'}}>
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
    
    return(

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title">

        <ClickAwayListener onClickAway={() => {}}>
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',  
                alignItems: 'center',
                justifySelf: 'center',
                alignSelf: 'stretch',
                bgcolor: 'white',
                position: 'fixed',
                top: '5vh',
                width: {width},
                height: {height},
                maxWidth: 1600,
                padding: 2,
                zIndex: 1000,
                overflowY: 'auto',
                overflowX: 'hidden',
                borderRadius: 2,
                border: '1px solid #858585ff',
            }}>

                {dialogueContent}

            </Box>
        </ClickAwayListener>
    </Modal>
        

    );

}