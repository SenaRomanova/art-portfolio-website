import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Socials from "../assets/Socials";
import PageHeader from "../assets/PageHeading";
import { Stack } from "@mui/material";


export default function Contacts() {
    return(
        <>

        <PageHeader name={'Contacts'}/>

        <Stack sx={{display: "flex", width: '100%', justifyContent: "left",  alignItems: "center", padding: 2}}>
            <Typography variant="h4" color="grey">Socials: </Typography>\
            
            <Socials/>
        </Stack>


        </>
        
    );
}