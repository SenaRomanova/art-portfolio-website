import Box from "@mui/material/Box";
import ScrollableGallery from "./ScrollableGallery";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { useState, useRef, useEffect } from "react";
import { baseTheme } from "./AppTheme";

export default function OverlayWindow({
  price,
  imageList,
  description,
  materials,
  onClose,
}) {
  const width = "90vw";
  const height = "80vh";
  const imgUrls = imageList || [];

  const [hintVisible, setHintVisible] = useState(true);

  const scrollBoxRef = useRef(null);

  useEffect(() => {
    const box = scrollBoxRef.current;

    function handleScroll() {
      if (!box) return;

      const { scrollTop, scrollHeight, clientHeight } = box;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // -1 for float precision

      if (isAtBottom && hintVisible) {
        setHintVisible(false);
      }
    }

    box?.addEventListener("scroll", handleScroll);
    return () => box?.removeEventListener("scroll", handleScroll);
  }, []);

  const dialogueContent = (
    <>
      <Stack
        sx={{
          display: "flex",
          marginTop: 30,
          marginBottom: "10vh",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "inherit",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          {imageList && <ScrollableGallery imgUrls={imgUrls} />}
        </Box>
      </Stack>

      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "static",
          alignItems: "center",
          color: "grey",
          width: "90%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "Left", width: "inherit", paddingBottom: 2 }}
        >
          {price}
        </Typography>

        <Typography
          variant="h5"
          sx={{ textAlign: "Left", width: "inherit", paddingBottom: 2 }}
        >
          {description && "Description:"}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify", width: "inherit", paddingBottom: 4 }}
        >
          {description}
        </Typography>

        <Typography
          variant="h5"
          sx={{ textAlign: "Left", width: "inherit", paddingBottom: 2 }}
        >
          {materials && "Materials:"}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify", width: "inherit", paddingBottom: 4 }}
        >
          {materials}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "justify", width: "inherit", color: "grey" }}
        >
          Note: These are original and one-of-a-kind artworks. I do not
          currently sell prints. If you are looking to use high resolution
          images of my art, please contact me via email or my socials.
        </Typography>
      </Stack>
    </>
  );

  return (
    <>
      <Box
        ref={scrollBoxRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          justifySelf: "center",
          alignSelf: "stretch",
          bgcolor: "white",
          position: "fixed",
          top: "12vh",
          width: { width },
          height: { height },
          maxWidth: 1600,
          padding: 1,
          zIndex: 1000,
          overflowY: "auto",
          overflowX: "hidden",
          borderRadius: 2,
          border: "1px solid #858585ff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            top: 0,
            position: "fixed",
            cursor: "pointer",
          }}
        >
          <CloseIcon
            onClick={onClose}
            sx={{
              ml: 1,
              color: "black",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              [baseTheme.breakpoints.up("xs")]: { fontSize: "4.5rem" },
              [baseTheme.breakpoints.up("md")]: { fontSize: "3.8rem" },
              [baseTheme.breakpoints.up("lg")]: { fontSize: "3rem" },
            }}
          />
        </Box>
        {dialogueContent}
      </Box>
    </>
  );
}
