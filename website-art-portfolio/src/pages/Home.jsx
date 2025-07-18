import Box
 from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Home() {
    return(
        <Box sx={{bgcolor: '#66666686', display: 'flex', height: '100vh', justifyContent: "center"}}>
            <Typography variant="h2"> Home </Typography>
        </Box>
    );
}