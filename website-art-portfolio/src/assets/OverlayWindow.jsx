import Box from "@mui/material/Box";
import ScrollableGallery from './ScrollableGallery';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { useState, useRef, useEffect } from "react";


export default function OverlayWindow({imageList, description, materials, onClose}) {
    
    const width = '90vw';
    const height = '90vh';
    const imgUrls = imageList ||[
    ];

    const [hintVisible, setHintVisible] = useState(true);

    const scrollBoxRef = useRef(null);

    useEffect(() => {
        const box = scrollBoxRef.current;

        function handleScroll() {
            if (!box) return;

            const { scrollTop, scrollHeight, clientHeight } = box;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight -1; // -1 for float precision

            if (isAtBottom && hintVisible) {
                setHintVisible(false);
            }
        }

        box?.addEventListener('scroll', handleScroll);
        return () => box?.removeEventListener('scroll', handleScroll);
    }, []);


    const dialogueContent =(

        <>

            <Stack sx={{display: 'flex', marginTop: '20vh', marginBottom: '10vh', width: '100%', height: '100%'}}>
                <Box sx={{display: "flex", width: 'inherit', justifyContent: "left",  alignItems: "center"}}>
                        {imageList && <ScrollableGallery imgUrls={imgUrls}/>}
                </Box>
            </Stack>


            <Stack sx={{display: "flex", justifyContent: "center",  position: 'static', alignItems: "center", color: 'grey', width: '90%'}}>
                    <Typography variant="h5" sx={{textAlign: 'Left', width: 'inherit', paddingBottom: 2}}>
                        {description && "Description:"}
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'justify', width: 'inherit', paddingBottom: 4}}>
                        {description}
                    </Typography>

                    <Typography variant="h5" sx={{textAlign: 'Left', width: 'inherit', paddingBottom: 2}}>
                        {materials && "Materials:"}
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'justify', width: 'inherit', paddingBottom: 4}}>
                        {materials}
                    </Typography>
                    
            </Stack>

            
            
        </>
    );
    
    return(
        <>
            <Box sx={{display: "flex", width: '100%', justifyContent: 'flex-end', top: 0, position: 'fixed', cursor: 'pointer', padding: 2, bgcolor: 'red'}}>
                    <CloseIcon onClick ={onClose} fontSize = 'large' sx={{color: 'white'}}/>
            </Box>
            
            {hintVisible && 
                (<Box 
                    sx={{display: 'flex', width: '100%', position: 'fixed', bottom: 30, justifyContent: 'center', zIndex: 2000, padding: 2}}> 
                    <ArrowDropDownCircleOutlinedIcon fontSize="large" sx={{color: 'black'}}/>
                </Box>)}

            <Box 
            ref= {scrollBoxRef}
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
            
            </>
    );

}