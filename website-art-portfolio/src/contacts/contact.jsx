import {
  Box,
  Stack,
  Container,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import PageHeader from "../assets/PageHeading";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const isDesktop = useMediaQuery("(min-width:1000px)");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbr7ypc",
        "template_rxn2fdc",
        form.current,
        "YIIG-0l2458UJz3DR"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ justifyItems: "center" }}>
        <PageHeader name={"Contact Us!"} />
      </Box>
      <Stack
        component="form"
        ref={form}
        onSubmit={sendEmail}
        spacing={3}
        sx={{ width: "100%" }}
      >
        <TextField
          name="user_name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter Name"
          required
        />
        <TextField
          name="user_email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter email address"
          required
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          placeholder="Enter your email"
          fullWidth // stretches input to fill container width
          size="medium" // default is medium, you can adjust for legibility
          margin="normal" // adds vertical margin for spacing (alternative to Stack spacing)
          multiline
          rows={5}
          required
        />
        <Button type="submit" variant="outlined">
          {" "}
          Send
        </Button>
      </Stack>
    </Container>
  );
}
