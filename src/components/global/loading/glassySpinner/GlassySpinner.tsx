import { memo, useEffect, useRef } from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";
import gsap from "gsap";

type Props = {
  loading: boolean;
};

function GlassySpinner({ loading }: Props) {
  const theme = useTheme();

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (loading) {
      gsap.to(el, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(el, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [loading]);

  return (
    <Box
      ref={overlayRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        opacity: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 1300,
        pointerEvents: "none",
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <CircularProgress disableShrink color="primary" />
    </Box>
  );
}

export default memo(GlassySpinner);
