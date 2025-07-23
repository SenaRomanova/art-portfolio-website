import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
    return (
        <>
            <Container sx={{display: "flex", justifyContent: "center",  alignItems: "center", padding: 2}}>
                
                <Typography variant="h2" color="grey"> Home </Typography>
            </Container>

            <Container sx={{ margin: '16px', bgcolor: '#858585', display: 'flex', height: '50vh', justifyContent: "center",  alignItems: "center" }}>
                        
                <Container sx={{ margin: '16px', width: 'inherit', height: 'inherit', bgcolor: '#000000' }}></Container>
                <Container sx={{ margin: '16px', width: 'inherit', height: 'inherit', bgcolor: '#000000' }}></Container>
            </Container>

            <Container sx={{ margin: '16px', bgcolor: '#858585', display: 'flex', height: '50vh', justifyContent: "center",  alignItems: "center" }}>
                        
                <Container sx={{ margin: '16px', width: 'inherit', height: 'inherit', bgcolor: '#000000' }}></Container>
                <Container sx={{ margin: '16px', width: 'inherit', height: 'inherit', bgcolor: '#000000' }}></Container>
            </Container>

        </>
        
    );
}