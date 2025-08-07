import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AltaiSun from "../assets/ImageCatalogue/NomadicBeauty/AltaiSun.jpg";
import AltaiSunDetails from "../assets/ImageCatalogue/NomadicBeauty/AltaiSunDetails.jpg";
import ArcherGirl from "../assets/ImageCatalogue/NomadicBeauty/ArcherGirl.jpg";
import ShamanGirl from "../assets/ImageCatalogue/NomadicBeauty/ShamanGirl.jpg";
import StarGatherer from "../assets/ImageCatalogue/NomadicBeauty/StarGatherer.jpg";
import StarGathererDetail from "../assets/ImageCatalogue/NomadicBeauty/StarGathererDetail.jpg";

import Divider from '@mui/material/Divider';


import Template from "./PageTemplate";

export default function NomadicBeauties() {

    //add all the thumbnails: 
    const thumbnails = [AltaiSun, ArcherGirl, ShamanGirl, StarGatherer];

    //add the thumbnail descriptions:
    const thumbnailNames = ['Altai Sun', 'Archer Girl', 'Shaman Girl', 'Star Gatherer'];

    const thumbnailDescriptions = ['Altai Sun Description', 'Archer Girl Description', 'Shaman Girl Description', 'Star Gatherer Description'];

    //create pop-up page content for each artwork:
    const altaiSunCatalogue = [AltaiSun, AltaiSunDetails];
    const archerGirlCatalogue = [ArcherGirl];
    const shamanGirlCatalogue = [ShamanGirl];
    const starGathererCatalogue = [StarGatherer, StarGathererDetail]
    const catalogues = [altaiSunCatalogue, archerGirlCatalogue, shamanGirlCatalogue, starGathererCatalogue];

    //create pop-up page descriptions for each artwork:

    const altaiSunDescription = 'Beautiful Altai Sun.';
    const archerGirlDescription = 'Archery is Art.';
    const shamanGirlDescription = 'Shaman Girl\'s Magic';
    const starGathererDescription = 'Stars Gathered like Berries.';
    const descriptions = [altaiSunDescription, archerGirlDescription, shamanGirlDescription, starGathererDescription];

    //create pop-up page materials for each artwork:

    const altaiSunMaterials = 'Made of Sun and Snow.';
    const archerGirlMaterials = 'Made of Blood and Sweat.';
    const shamanGirlMaterials = 'Made of Ancient Rules.';
    const starGathererMaterials = 'Made of the Secrets of the Universe.';
    const materials = [altaiSunMaterials, archerGirlMaterials, shamanGirlMaterials, starGathererMaterials];


    return(
        <>
            <Box sx={{display: 'flex', width: '100%', margin: 3, marginBottom: 0, justifyContent: 'left'}}>
                <Typography variant="h3" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> Nomadic Beauties </Typography>
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