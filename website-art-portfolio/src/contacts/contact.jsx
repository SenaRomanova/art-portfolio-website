import {
  Box,
  Stack,
  Container,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import PageHeader from "../assets/PageHeading";

export default function ContactForm() {
  const isDesktop = useMediaQuery("(min-width:1000px)");
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ justifyItems: "center" }}>
        <PageHeader name={"Contact Us!"} />
      </Box>
      <Stack component="form" spacing={3} sx={{ width: "100%" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter Name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter email address"
        />
        <TextField
          label="Message"
          variant="outlined"
          placeholder="Enter your email"
          fullWidth // stretches input to fill container width
          size="medium" // default is medium, you can adjust for legibility
          margin="normal" // adds vertical margin for spacing (alternative to Stack spacing)
          multiline
          rows={5}
        />
      </Stack>
    </Container>
  );
}
