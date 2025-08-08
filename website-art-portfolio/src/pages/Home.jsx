import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import FishCover from "./../assets/FishCover.jpg";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import PageHeader from "../assets/PageHeading";

export default function Home() {
  const [vw, setVw] = useState(window.innerWidth);
  return (
    <>
      <PageHeader name={'Home'}/>
    </>
  );
}
