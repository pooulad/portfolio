import { Backdrop, Box, CircularProgress } from "@mui/material";
import { memo } from "react";

function LoadingBackdrop() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <Backdrop
        open
        sx={{ color: "#000000", zIndex: 1300 }}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
    </Box>
  );
}

export default memo(LoadingBackdrop);
