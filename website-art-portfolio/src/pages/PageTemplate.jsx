
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

export default function Template({thumbnails, thumbnailDescriptions, detailedCatalogueList, descriptionList, materialsList}) {
    


    const [open, setOpen] = useState(false);
    const [id, setID] = useState(-1);

    const gridElement = (image, description, id) => (
        <>
            <Box sx={{width: '90%', height: '20vh', margin: 2, borderRadius: 1, border: '1px solid grey', display: 'flex', alignItems: 'center', '&:hover': {borderColor: 'red'}, 
                cursor: "pointer"}}
                onClick={() => {
                    setID(id);
                    setOpen(true); 
                  }}>

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
                    position: 'relative',
                    
                }}/>
                <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 2}}>
                    <Typography variant="h5" sx={{ width: '90%', height: '90%', textAlign: 'right', color: 'black', wordSpacing: '0.7em'}}>
                        {description}
                    </Typography>
                </Box>
            </Box>

            
        </>
    );


    return(
        <>

            {thumbnails.map((image, index) => gridElement(image, thumbnailDescriptions[index], index))}

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