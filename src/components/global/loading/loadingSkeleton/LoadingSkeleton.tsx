import { Box, Skeleton, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { memo } from "react";

function LoadingSkeleton({
  number = 3,
  variant = "h6",
}: {
  number: number;
  variant?: Variant;
}) {
  return (
    <Box>
      {Array.apply(null, new Array(number)).map((_, index) => {
        return (
          <Typography component="div" key={index} variant={variant}>
            <Skeleton animation="wave" />
          </Typography>
        );
      })}
    </Box>
  );
}

export default memo(LoadingSkeleton);
