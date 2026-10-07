import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Stack } from "@mui/material";
import { baseTheme } from "./AppTheme";
import { useTheme } from "@emotion/react";

export default function DropdownMenuButtonPhone({
  buttonName,
  content,
  paddingLeft,
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <Stack sx={{ display: "flex", width: "100%", alignItems: "start" }}>
        <Button
          disableRipple
          onClick={toggleMenu}
          variant="text"
          color="white"
          sx={{
            ...theme.typography.body1,
            display: "flex",
            color: "#858585ff",
            paddingLeft: { paddingLeft } || 0,
            textTransform: "none",
            "&:hover": { color: "#cb0000ff" },
          }}
        >
          {buttonName} {/* move this lower to have the icon be on the left */}
          {!open && (
            <KeyboardArrowRightIcon
              sx={{
                ml: 1,
                [baseTheme.breakpoints.up("xs")]: { fontSize: "2.2rem" },
                [baseTheme.breakpoints.up("md")]: { fontSize: "1.8rem" },
                [baseTheme.breakpoints.up("lg")]: { fontSize: "1.4rem" },
              }}
            />
          )}
          {open && (
            <KeyboardArrowDownIcon
              fontSize="small"
              sx={{
                ml: 1,
                [baseTheme.breakpoints.up("xs")]: { fontSize: "2.2rem" },
                [baseTheme.breakpoints.up("md")]: { fontSize: "1.8rem" },
                [baseTheme.breakpoints.up("lg")]: { fontSize: "1.4rem" },
              }}
            />
          )}
        </Button>

        {open && (
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              justifyContent: "left",
              zIndex: 100,
            }}
            onClick={() => setOpen(false)}
          >
            {content}
          </Box>
        )}
      </Stack>
    </>
  );
}
