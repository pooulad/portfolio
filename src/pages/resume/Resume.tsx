import { Box, Button, useTheme } from "@mui/material";
import resumePdf from "../../assets/pdf/resume.pdf";
import PDFViewer from "../../components/global/pdfViewer/PDFViewer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Resume() {
  const theme = useTheme();

  const { t } = useTranslation();

  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        viewerRef.current,
        {
          scale: 0.7,
          rotationY: 90,
          opacity: 0,
          transformOrigin: "left center",
        },
        {
          scale: 1,
          rotationY: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
        }
      );

      tl.to(
        viewerRef.current,
        {
          boxShadow: `0 0 20px 6px ${theme.palette.primary.main}`,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        },
        "+=0.5"
      );
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "70px",
        [theme.breakpoints.up("md")]: {
          gap: "150px",
        },
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          [theme.breakpoints.up("md")]: {
            width: "70%",
          },
          perspective: "800",
        }}
      >
        <Button variant="contained" href={resumePdf} target="_blank">
          {t("download_resume")}
        </Button>
        <Box sx={{ width: "100%" }} ref={viewerRef}>
          <PDFViewer fileUrl={resumePdf} />;
        </Box>
        <Button variant="contained" href={resumePdf} target="_blank">
          {t("download_resume")}
        </Button>
      </Box>
    </Box>
  );
}

export default Resume;
