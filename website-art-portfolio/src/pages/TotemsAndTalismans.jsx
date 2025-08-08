
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Template from "./PageTemplate";
import Divider from "@mui/material/Divider";

import HoleyShell from '../assets/ImageCatalogue/Totems&Talismans/HoleyShell.JPG';
import HoleyShellDetail from '../assets/ImageCatalogue/Totems&Talismans/HoleyShellDetail.jpg';
import OdeToTheSilkworm from '../assets/ImageCatalogue/Totems&Talismans/OdeToTheSilkworm.jpg';
import OdeToTheSilkworm1 from '../assets/ImageCatalogue/Totems&Talismans/OdeToTheSilkworm1.jpg';
import OdeToTheSilkworm2 from '../assets/ImageCatalogue/Totems&Talismans/OdeToTheSilkworm2.jpg';
import Talisman from '../assets/ImageCatalogue/Totems&Talismans/Talisman.jpg';
import TalismanDetail from '../assets/ImageCatalogue/Totems&Talismans/TalismanDetail.jpg';
import TheFarLands from '../assets/ImageCatalogue/Totems&Talismans/TheFarLands.jpg';
import TheOceanDepthsLeft from '../assets/ImageCatalogue/Totems&Talismans/TheOceanDepthsLeft.JPG';
import TheOceanDepthsRight from '../assets/ImageCatalogue/Totems&Talismans/TheOceanDepthsRight.JPG';
import TheOceanDepthsDetail from '../assets/ImageCatalogue/Totems&Talismans/TheOceanDepthsDetail.JPG';

export default function TotemsAndTalismans() {
//add all the thumbnails: 
    const thumbnails = [HoleyShell, OdeToTheSilkworm, Talisman, TheFarLands, TheOceanDepthsLeft];

    //add the thumbnail descriptions:
    const thumbnailNames = ['Holey Shell', 'Ode to the Silkworm', 'Talisman', 'The Far Lands', 'The Ocean Depths'];

    const thumbnailDescriptions = ['Holey Shell Description', 'Ode to the Silkworm Description', 'Talisman Description', 'The Far Lands Description', 'The Ocean Depths Description'];

    //create pop-up page content for each artwork:
    const holeyShellCatalogue = [HoleyShell, HoleyShellDetail];
    const odeToTheSilkwormCatalogue = [OdeToTheSilkworm, OdeToTheSilkworm1, OdeToTheSilkworm2];
    const talismanCatalogue = [Talisman, TalismanDetail];
    const theFarLandsCatalogue = [TheFarLands];
    const theOceanDepthsCatalogue = [TheOceanDepthsLeft, TheOceanDepthsRight, TheOceanDepthsDetail];
    const catalogues = [holeyShellCatalogue, odeToTheSilkwormCatalogue, talismanCatalogue, theFarLandsCatalogue, theOceanDepthsCatalogue];


    //create pop-up page descriptions for each artwork:

    const holeyShellDescription = '[HoleyShell, HoleyShellDetail]';
    const odeToTheSilkwormDescription  = '[OdeToTheSilkworm, OdeToTheSilkworm1, OdeToTheSilkworm2]';
    const talismanDescription  = '[Talisman, TalismanDetail]';
    const theFarLandsDescription  = '[TheFarLands]';
    const theOceanDepthsDescription  = '[TheOceanDepthsLeft, TheOceanDepthsRight, TheOceanDepthsDetail]';
    const descriptions  = [holeyShellDescription , odeToTheSilkwormDescription , talismanDescription , theFarLandsDescription , theOceanDepthsDescription ];

    //create pop-up page materials for each artwork:

    const holeyShellMaterials = '[HoleyShell, HoleyShellDetail]';
    const odeToTheSilkwormMaterials  = '[OdeToTheSilkworm, OdeToTheSilkworm1, OdeToTheSilkworm2]';
    const talismanMaterials = '[Talisman, TalismanDetail]';
    const theFarLandsMaterials = '[TheFarLands]';
    const theOceanDepthsMaterials = '[TheOceanDepthsLeft, TheOceanDepthsRight, TheOceanDepthsDetail]';
    const materials  = [holeyShellMaterials , odeToTheSilkwormMaterials , talismanMaterials, theFarLandsMaterials , theOceanDepthsMaterials];


    return(
        <>
            <Box sx={{display: 'flex', margin: 3}}>
                <Typography variant="h3" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> Totems and Talismans </Typography>
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