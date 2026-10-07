
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Template from "./PageTemplate";
import Divider from "@mui/material/Divider";

import PageHeader from "../assets/PageHeading";
import SheetWithRedPaperclips from '../assets/ImageCatalogue/TheLostSketchbook/Sheet with Red Paperclips.jpg';
import TrojanHorse from '../assets/ImageCatalogue/TheLostSketchbook/TrojanHorse.jpg';
 

export default function TheLostSketchbook() {
//add all the thumbnails: 
    const thumbnails = [SheetWithRedPaperclips, TrojanHorse];

    //add the thumbnail descriptions:
    const thumbnailNames = ['Sheet with Red Paperclips', 'Trojan Horse'];

    const thumbnailDescriptions = ['Sheet with Red Paperclips', 'Trojan Horse'];
    const priceList = ['SOLD', 'SOLD'];

    //create pop-up page content for each artwork:
    const paperclipsCatalogue = [SheetWithRedPaperclips];
    const trojanHorseCatalogue = [TrojanHorse];
    const catalogues = [paperclipsCatalogue, trojanHorseCatalogue];

    //create pop-up page descriptions for each artwork:

    const paperclipsDescription = ["Sheet with Red Paperclips"];
    const trojanHorseDescription = ["Trojan Horse"];
    const descriptions = [paperclipsDescription, trojanHorseDescription];

    //create pop-up page materials for each artwork:

    const paperclipsMaterials = ["Sheet with Red Paperclips"];
    const trojanHorseMaterials = ["Trojan Horse"];
    const materials = [paperclipsMaterials, trojanHorseMaterials];


    return(
        <>
            <PageHeader name={"The Lost Sketchbook"}/>


            <Divider variant="middle" sx={{width: '90%', margin: 4}}/>

            <Template 
                thumbnails={thumbnails} 
                thumbnailNames={thumbnailNames}
                thumbnailDescriptions = {thumbnailDescriptions} 
                prices={priceList}
                detailedCatalogueList={catalogues}
                descriptionList={descriptions}
                materialsList={materials}
            />
        </>
        
    );
}