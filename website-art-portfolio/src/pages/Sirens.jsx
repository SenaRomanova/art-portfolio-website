
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Template from "./PageTemplate";
import Divider from "@mui/material/Divider";

import TheBookOfEclipses from './../assets/ImageCatalogue/TheMoonAndSirens/TheBookOfEclipses.JPG';
import TheBookOfEclipsesDetails from './../assets/ImageCatalogue/TheMoonAndSirens/TheBookOfEclipsesDetails.JPG';

import TheBookOfEclipses1 from './../assets/ImageCatalogue/TheMoonAndSirens/TheBookOfEclipses1.jpeg';
import TheBookOfEclipsesDetail11 from './../assets/ImageCatalogue/TheMoonAndSirens/TheBookOfEclipsesDetail1-1.jpg';
import TheBookOfEclipsesDetail12 from './../assets/ImageCatalogue/TheMoonAndSirens/TheBookOfEclipsesDetail1-2.jpeg';

import TheCupOfSelena from './../assets/ImageCatalogue/TheMoonAndSirens/TheCupOfSelena.jpg';
import TheCupOfSelenaDetail from './../assets/ImageCatalogue/TheMoonAndSirens/TheCupOfSelenaDetail.jpg';

import TheFishermansWife from './../assets/ImageCatalogue/TheMoonAndSirens/TheFishermansWife.JPG';
import TheFishermansWifeDetail from './../assets/ImageCatalogue/TheMoonAndSirens/TheFishermansWifeDetail.jpg';
import TheFrogPrincess from './../assets/ImageCatalogue/TheMoonAndSirens/TheFrogPrincess.jpg';
import TheOwlQueen from './../assets/ImageCatalogue/TheMoonAndSirens/TheOwlQueen.jpg';
import ThePolarMermaid from './../assets/ImageCatalogue/TheMoonAndSirens/ThePolarMermaid.jpg';
import ThePolarMermaid1 from './../assets/ImageCatalogue/TheMoonAndSirens/ThePolarMermaid1.jpg';
import ThePolarMermaidDetail from './../assets/ImageCatalogue/TheMoonAndSirens/ThePolarMermaidDetail.jpg';
import ThePolarMermaidDetail11 from './../assets/ImageCatalogue/TheMoonAndSirens/ThePolarMermaidDetail1-1.jpg';
import ThePolarMermaidDetail12 from './../assets/ImageCatalogue/TheMoonAndSirens/ThePolarMermaidDetail1-2.jpg';
import TheShyMandrake from './../assets/ImageCatalogue/TheMoonAndSirens/TheShyMandrake.jpg';

export default function Sirens() {
//add all the thumbnails: 
    const thumbnails = [TheBookOfEclipses, TheBookOfEclipses1, TheCupOfSelena, TheFishermansWife, TheFrogPrincess, TheOwlQueen, ThePolarMermaid, ThePolarMermaid1, TheShyMandrake];

    //add the thumbnail descriptions:
    const thumbnailNames = ['The Book of Eclipses', 'The Book of Eclipses', 'The Cup Of Selena', 'The Fishermans Wife', 'The Frog Princess', 'The Owl Queen', 'The Polar Mermaid', 'The Polar Mermaid1', 'The Shy Mandrake'];

    const thumbnailDescriptions = ['The Book of Eclipses', 'The Book of Eclipses', 'The Cup Of Selena', 'The Fishermans Wife', 'The Frog Princess', 'The Owl Queen', 'The Polar Mermaid', 'The Polar Mermaid1', 'The Shy Mandrake'];

    //create pop-up page content for each artwork:
    const eclipses1Catalogue = [TheBookOfEclipses, TheBookOfEclipsesDetails];
    const eclipses2Catalogue = [TheBookOfEclipses1, TheBookOfEclipsesDetail11, TheBookOfEclipsesDetail12];
    const theCupOfSelenaCatalogue = [TheCupOfSelena, TheCupOfSelenaDetail];
    const theFishermansWifeCatalogue = [TheFishermansWife, TheFishermansWifeDetail];
    const theOwlQueenCatalogue = [TheOwlQueen];
    const mermaid1Catalogue = [ThePolarMermaid, ThePolarMermaidDetail];
    const mermaid2Catalogue = [ThePolarMermaid1, ThePolarMermaidDetail11, ThePolarMermaidDetail12];
    const theShyMandrakeCatalogue = [TheShyMandrake];

    const catalogues = [eclipses1Catalogue, eclipses2Catalogue, theCupOfSelenaCatalogue, theFishermansWifeCatalogue, theOwlQueenCatalogue, mermaid1Catalogue, mermaid2Catalogue, theShyMandrakeCatalogue];

    //create pop-up page descriptions for each artwork:

    const eclipses1Description = '[TheBookOfEclipses, TheBookOfEclipsesDetails]';
    const eclipses2Description = '[TheBookOfEclipses1, TheBookOfEclipsesDetail11, TheBookOfEclipsesDetail12]';
    const theCupOfSelenaDescription = '[TheCupOfSelena, TheCupOfSelenaDetail]';
    const theFishermansWifeDescription = '[TheFishermansWife, TheFishermansWifeDetail]';
    const theOwlQueenDescription = '[TheOwlQueen]';
    const mermaid1Description = '[ThePolarMermaid, ThePolarMermaidDetail]';
    const mermaid2Description = '[ThePolarMermaid1, ThePolarMermaidDetail11, ThePolarMermaidDetail12]';
    const theShyMandrakeDescription = '[TheShyMandrake]';

    const descriptions = [eclipses1Description, eclipses2Description, theCupOfSelenaDescription, theFishermansWifeDescription, theOwlQueenDescription, mermaid1Description, mermaid2Description, theShyMandrakeDescription];

    //create pop-up page materials for each artwork:

    const eclipses1Material = '[TheBookOfEclipses, TheBookOfEclipsesDetails]';
    const eclipses2Material = '[TheBookOfEclipses1, TheBookOfEclipsesDetail11, TheBookOfEclipsesDetail12]';
    const theCupOfSelenaMaterial = '[TheCupOfSelena, TheCupOfSelenaDetail]';
    const theFishermansWifeMaterial = '[TheFishermansWife, TheFishermansWifeDetail]';
    const theOwlQueenMaterial = '[TheOwlQueen]';
    const mermaid1Material = '[ThePolarMermaid, ThePolarMermaidDetail]';
    const mermaid2Material= '[ThePolarMermaid1, ThePolarMermaidDetail11, ThePolarMermaidDetail12]';
    const theShyMandrakeMaterial = '[TheShyMandrake]';

    const materials = [eclipses1Material, eclipses2Material, theCupOfSelenaMaterial, theFishermansWifeMaterial, theOwlQueenMaterial, mermaid1Material, mermaid2Material, theShyMandrakeMaterial];


    return(
        <>
            <Box sx={{display: 'flex', width: '100%', margin: 3, marginBottom: 0, justifyContent: 'left'}}>
                <Typography variant="h2" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> The Moon and Sirens </Typography>
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