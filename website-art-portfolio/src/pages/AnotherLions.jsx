
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Template from "./PageTemplate";
import Divider from "@mui/material/Divider";

import ItalianFontaine from './../assets/ImageCatalogue/TheAnotherLions/ItalianFontaine.jpg';
import AnotherLions1 from './../assets/ImageCatalogue/TheAnotherLions/AnotherLions1.JPG';
import AnotherLions2 from './../assets/ImageCatalogue/TheAnotherLions/AnotherLions2.JPG';
import PageHeader from "../assets/PageHeading";

export default function AnotherLions() {
//add all the thumbnails: 
    const thumbnails = [ItalianFontaine, AnotherLions1, AnotherLions2];

    //add the thumbnail descriptions:
    const thumbnailNames = ['ItalianFontaine', 'AnotherLions1', 'AnotherLions2'];

    const thumbnailDescriptions = ['ItalianFontaine', 'AnotherLions1', 'AnotherLions2'];
    const priceList = ['$5,200.00', '$5,200.00', '$10,000.00',]

    //create pop-up page content for each artwork:
    const italianFontaineCatalogue = [ItalianFontaine];
    const anotherLions1Catalogue = [AnotherLions1];
    const anotherLions2Catalogue = [AnotherLions2];
    const catalogues = [italianFontaineCatalogue, anotherLions1Catalogue, anotherLions2Catalogue];

    //create pop-up page descriptions for each artwork:

    const italianFontaineDescription = '[Italian Fontaine]';
    const anotherLions1Description = '[AnotherLions1]';
    const anotherLions2Description = '[AnotherLions2]';
    const descriptions = [italianFontaineDescription, anotherLions1Description, anotherLions2Description];

    //create pop-up page materials for each artwork:

    const italianFontaineMaterials = '[ItalianFontaine]';
    const anotherLions1Materials = '[AnotherLions1]';
    const anotherLions2Materials = '[AnotherLions2]';
    const materials = [italianFontaineMaterials, anotherLions1Materials, anotherLions2Materials];


    return(
        <>
            <PageHeader name={"Another Lions"}/>


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