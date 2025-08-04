
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Template from "./PageTemplate";
import Divider from "@mui/material/Divider";
import Penates from './../assets/ImageCatalogue/Penates/ThePenates.jpg';

export default function ThePenates() {
  //add all the thumbnails: 
    const thumbnails = [Penates];

    //add the thumbnail descriptions:
    const thumbnailNames = ['The Penates'];

    const thumbnailDescriptions = ['The Penates Description'];

    //create pop-up page content for each artwork:
    const thePenatesCatalogue = [Penates];
    const catalogues = [thePenatesCatalogue];

    //create pop-up page descriptions for each artwork:

    const thePenatesDescription = '[ThePenates]';
    const descriptions = [thePenatesDescription];

    //create pop-up page materials for each artwork:

    const thePenatesMaterials = '[ThePenates]';
    const materials = [thePenatesMaterials];


    return(
        <>
            <Box sx={{display: 'flex', width: '100%', margin: 3, marginBottom: 0, justifyContent: 'left'}}>
                <Typography variant="h2" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> The Penates </Typography>
            </Box>


            <Divider variant="middle" sx={{width: '90%', margin: 4}}/>

            <Template 
                thumbnails={thumbnails} 
                thumbnailNames={thumbnailNames}
                thumbnailDescriptions = {thumbnailDescriptions} 
                detailedCatalogueList={catalogues}
                descriptionList={descriptions}
                materialsList={materials}
            />
        </>
        
    );
}