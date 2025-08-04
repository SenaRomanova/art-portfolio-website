
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Template from "./PageTemplate";
import Divider from "@mui/material/Divider";

import ArchiveFish from "../assets/ImageCatalogue/TheInnerFish/ArchiveFish.jpg";
import ArchiveFishDetail from "../assets/ImageCatalogue/TheInnerFish/ArchiveFishDetail.jpg"
import GirlInAnIslandicSweater from "../assets/ImageCatalogue/TheInnerFish/GirlInAnIslandicSweater.jpeg"
import GirlInAnIslandicSweaterDetail from "../assets/ImageCatalogue/TheInnerFish/GirlInAnIslandicSweaterDetail.jpeg"
import ManuscriptFish from "../assets/ImageCatalogue/TheInnerFish/ManuscriptFish.jpg"
import MethuselahTheFish from "../assets/ImageCatalogue/TheInnerFish/MethuselahTheFish.JPG"
import MethuselahTheFishDetail from "../assets/ImageCatalogue/TheInnerFish/MethuselahTheFishDetail.JPG"
import RenaissanceFish from "../assets/ImageCatalogue/TheInnerFish/RenaissanceFish.jpg"
import RenaissanceFishDetail from "../assets/ImageCatalogue/TheInnerFish/RenaissanceFishDetail.jpg"




export default function TheInnerFish() {


    const thumbnails = [ArchiveFish, GirlInAnIslandicSweater, ManuscriptFish, MethuselahTheFish, RenaissanceFish];

    //add the thumbnail descriptions:
    const thumbnailNames = ['Archive Fish', 'Girl in the Islandic Sweater', 'Manuscript Fish', 'Methuselah The Fish', 'Renaissance Fish'];

    const thumbnailDescriptions = ['Archive Fish Description', 'Girl in the Islandic Sweater Description', 'Manuscript Fish Description', 'Methuselah The Fish Description','Renaissance Fish Description' ];

    const archiveFishCatalogue = [ArchiveFish, ArchiveFishDetail];
    const islandicSweaterCatalogue = [GirlInAnIslandicSweater, GirlInAnIslandicSweaterDetail];
    const manuscriptFishCatalogue = [ManuscriptFish];
    const methuselahFishCatalogue = [MethuselahTheFish, MethuselahTheFishDetail];
    const renaissanceFishCatalogue = [RenaissanceFish, RenaissanceFishDetail];
    const catalogues = [archiveFishCatalogue, islandicSweaterCatalogue, manuscriptFishCatalogue, methuselahFishCatalogue, renaissanceFishCatalogue];

    const archiveFishDescription = 'Archive Fish';
    const islandicSweaterDescription = 'Islandic Sweater';
    const manuscriptFishDescription = 'Manuscript Fish';
    const methuselahFishDescription = 'Methuselah The Fish';
    const renaissanceFishDescription = 'Renaissance Fish';
    const descriptions = [archiveFishDescription, islandicSweaterDescription, manuscriptFishDescription, methuselahFishDescription, renaissanceFishDescription];


    const archiveFishMaterials = 'Archive Fish Materials';
    const islandicSweaterMaterials = 'Islandic Sweater Materials';
    const manuscriptFishMaterials = 'Manuscript Fish Materials';
    const methuselahFishMaterials = 'Methuselah The Fish Materials';
    const renaissanceFishMaterials = 'Renaissance Fish Materials';
    const materials = [archiveFishMaterials, islandicSweaterMaterials, manuscriptFishMaterials, methuselahFishMaterials, renaissanceFishMaterials];

    


    return(
        <>
            <Box sx={{display: 'flex', width: '100%', margin: 3, marginBottom: 0, justifyContent: 'left'}}>
                <Typography variant="h2" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> The Inner Fish </Typography>
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