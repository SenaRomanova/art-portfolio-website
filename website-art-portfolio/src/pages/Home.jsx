import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import FishCover from './../assets/FishCover.jpg';
import Typography from "@mui/material/Typography";

export default function Home() {
    return (
        <>
            <Box sx={{display: "flex", width: '100%', justifyContent: "center", alignItems: "center", overflow: 'hidden', bgcolor: '#000000', height: '40vh', borderTop: '1px solid #ce0000ff', borderBottom: '1px solid #ce0000ff'}}>
                <Box
                component="img"
                src={FishCover}
                alt="Logo"
                sx={{
                    paddingBottom: '0.5em',
                    width: 'auto',
                    height: '60vw', 
                    alignContent: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '50px'
                }}/>
            </Box>

            <Container sx={{display: "flex", justifyContent: "center",  alignItems: "center", padding: 2}}>
                <Typography variant="h2" color="grey"> Home </Typography>
            </Container>
        </>
        
    );
}