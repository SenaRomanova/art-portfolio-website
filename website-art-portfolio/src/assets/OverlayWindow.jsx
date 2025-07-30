import Box from "@mui/material/Box";
import ScrollableGallery from './ScrollableGallery';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CloseIcon from '@mui/icons-material/Close';  

export default function OverlayWindow({imageList, description, materials}) {
    
    const width = '90vw';
    const height = '90vh';
    const imgUrls = imageList ||[
    ];


    const dialogueContent =(

        <>
            
            <Stack sx={{display: 'flex', position: 'static', marginTop: '20vh', marginBottom: '10vh', width: '100%', height: '100%'}}>

                <Box sx={{display: "flex", width: 'inherit', justifyContent: "right",  alignItems: "center", position: 'sticky'}}>
                    <CloseIcon fontSize = 'large' sx={{color: 'black', bgcolor: 'red'}}/>
                </Box>

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
    );

}