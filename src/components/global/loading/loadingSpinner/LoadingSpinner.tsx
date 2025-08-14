import { Box, CircularProgress } from "@mui/material";
import { memo } from "react";

const defaultHeight: string = "100vh";

interface LoadingSpinnerProps {
  height?: string;
}

function LoadingSpinner({ height = defaultHeight }: LoadingSpinnerProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: height,
      }}
    >
      <CircularProgress disableShrink color="primary" />
    </Box>
  );
}

export default memo(LoadingSpinner);
