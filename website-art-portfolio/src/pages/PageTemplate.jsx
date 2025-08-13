import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import OverlayWindow from "../assets/OverlayWindow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

export default function Template({
  thumbnails,
  thumbnailNames,
  prices,
  thumbnailDescriptions,
  detailedCatalogueList,
  descriptionList,
  materialsList,
}) {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(-1);

  const gridElement = (image, name, description, price, id) => (
    <Card
      onClick={() => {
        setID(id);
        setOpen(true);
      }}
      sx={{
        height: "100%",
        width: "100%",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        "&:hover img": {
          transform: "scale(1.04)", //zoom amt
        },
        "&:hover .hoverText": {
          color: "rgba(65, 65, 65, 1)", // example: change text color
        },
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt="Image"
        sx={{
          margin: 1,
          width: "auto",
          height: "65%",
          objectFit: "cover",
          overflow: "hidden",
          alignContent: "center",
          justifySelf: "center",
          transition: "transform 0.3s ease", //zoom time
          transformOrigin: "center center",
        }}
      />

      <CardContent
        sx={{ flexGrow: 1, width: "100%", alignContent: "flex-end" }}
      >
        <Typography
          variant="h5"
          className="hoverText"
          sx={{ width: "100%", textAlign: "right", color: "grey" }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          className="hoverText"
          sx={{ width: "100%", textAlign: "right", color: "grey" }}
        >
          {price}
        </Typography>
        <Typography
          variant="subtitle1"
          className="hoverText"
          sx={{ textAlign: "right", width: "100%", color: "grey" }}
        >
          {description}
        </Typography>

        <Divider
          variant="middle"
          sx={{ width: "100%", justifySelf: "center" }}
        />
      </CardContent>
    </Card>
  );

  return (
    <>
      {
        <Box sx={{ margin: 1 }}>
          <Grid
            container
            spacing={3}
            rowSpacing={6}
            sx={{ justifyContent: "center", alignContent: "center" }}
          >
            {thumbnails.map((image, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 400,
                  width: 300,
                }}
              >
                {gridElement(
                  image,
                  thumbnailNames[index],
                  thumbnailDescriptions[index],
                  prices[index],
                  index
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      }

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(5px)",
          position: "fixed",
        }}
      >
        <ClickAwayListener>
          <OverlayWindow
            imageList={detailedCatalogueList[id]}
            description={descriptionList[id]}
            materials={materialsList[id]}
            price={prices[id]}
            onClose={() => setOpen(false)}
          />
        </ClickAwayListener>
      </Modal>
    </>
  );
}
