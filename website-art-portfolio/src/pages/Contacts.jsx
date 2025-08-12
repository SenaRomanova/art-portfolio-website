import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Socials from "../assets/Socials";
import PageHeader from "../assets/PageHeading";
import { Stack } from "@mui/material";
import ContactForm from "../contacts/contact";


export default function Contacts() {
    return (
        <>


            <PageHeader name={"Contact Information"} />

            <Stack sx={{ display: "flex", width: '100%', justifyContent: "left", alignItems: "center" }}>
                <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "center", width: "100%", color: "grey" }}>
                    For all work-related or business collaboration inquiries, please contact me.
                </Typography>


                <Box sx={{width: '100%', margin: 5}}>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "center", width: "100%", color: "grey" }}>
                        Via email:
                    </Typography>
                    <ContactForm />
                </Box>


                <Box sx={{width: '100%', margin: 5}}>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "center", width: "100%", color: "grey" }}>
                        Via social media:
                    </Typography>
                    <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    
                        <Socials />

                    </Box>
                </Box>

            </Stack>


        </>

    );
}