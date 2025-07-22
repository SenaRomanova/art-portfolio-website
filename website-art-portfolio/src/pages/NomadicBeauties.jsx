import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function NomadicBeauties() {
    return(
        <Container sx={{display: "flex", justifyContent: "center",  alignItems: "center", padding: 2}}>
            <Typography variant="h2" color="grey">Nomadic Beauties</Typography>
        </Container>
    );
}