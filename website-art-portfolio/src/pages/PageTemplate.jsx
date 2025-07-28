
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FishCover from "../assets/FishCover.jpg";
import FishProcess from "../assets/FishProcess.jpg";
import Typography from "@mui/material/Typography";

export default function Template({imageList = [FishCover, FishProcess], imageDescriptions = ["Default description for the image.", "This is another default description."]}) {

    

    const gridElement = (image, description) => (
        <>
            <Box sx={{width: '90%', height: '20vh',  bgcolor: 'white', margin: 2, borderRadius: 1, border: '1px solid grey', display: 'flex', alignItems: 'center', '&:hover': {borderColor: 'red'}}}>
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
                <Box sx={{width: '100%', bgcolor: 'grey', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 2}}>
                    <Typography variant="h5" sx={{ width: '90%', height: '90%', textAlign: 'right', color: 'black', bgcolor: 'red', wordSpacing: '0.7em'}}>
                        {description}
                    </Typography>
                </Box>
            </Box>

            
        </>
    );


    return(
        <>
            {imageList.map((image, index) => gridElement(image, imageDescriptions[index]))}
        </>
        
    );

}