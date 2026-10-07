
import { Box, Typography } from "@mui/material";

export default function PageHeader({name}){
    return(
        <Box
            sx={{
            display: "flex",
            padding: 5
            }}
         >
            <Typography
            variant="h3"
            sx={{ display: "flex", justifyContent: "left", color: "black" }}
            >
            {name}
            </Typography>
        </Box>
    );
}