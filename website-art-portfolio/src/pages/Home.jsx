import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
    return (
        <>
            <Container sx={{display: "flex", justifyContent: "center",  alignItems: "center", padding: 2}}>
                
                <Typography variant="h2" color="grey"> Home </Typography>
            </Container>
        </>
        
    );
}