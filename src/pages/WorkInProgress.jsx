import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageHeader from "../assets/PageHeading";
import ScrollableGallery from "../assets/ScrollableGallery";
import WIP1 from '../assets/ImageCatalogue/CurrentWIPs/WIP1.jpg';
import WIP2 from '../assets/ImageCatalogue/CurrentWIPs/WIP2.jpg';
import WIP3 from '../assets/ImageCatalogue/CurrentWIPs/WIP3.jpg';
import WIP4 from '../assets/ImageCatalogue/CurrentWIPs/WIP4.jpg';
import WIP5 from '../assets/ImageCatalogue/CurrentWIPs/WIP5.jpg';


export default function WorkInProgress() {
    
    const images = [WIP1, WIP2, WIP3, WIP4, WIP5];
    return (
        <>
        <Container sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
            <PageHeader name={"Works In Progress"} />
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',height: "100%", width: "100%", }}>

                    <Box sx={{
                        display: "flex",
                        width: "inherit",
                        paddingBottom: 8,
                        }}>
                    <ScrollableGallery imgUrls={images} />
                    </Box>
                </Container>
            
            </Container>


        </>

    );
}