import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Socials from "../assets/Socials";


export default function Contacts() {
    return(
        <>

        <Box sx={{display: 'flex', width: '100%', margin: 3, marginTop: '5vh', justifyContent: 'center'}}>
            <Typography variant="h2" sx={{display: 'flex', justifyContent: 'left', color: 'black'}}> Contacts </Typography>
        </Box>

        <Container sx={{display: "flex", justifyContent: "left",  alignItems: "center", padding: 2}}>
            <Typography variant="h4" color="grey">Socials</Typography>
        </Container>

        <Socials/>

        </>
        
    );
}