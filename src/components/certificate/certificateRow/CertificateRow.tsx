import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  cert: any;
}

export default function CertificateRow({ cert }: Props) {
  const theme = useTheme()

  const { t } = useTranslation()

  return (
    <Box
      className="cert-row"
      sx={{
        width: "100%",
        display: "flex",
        gap: 3,
        padding: 2,
        border: "1px solid",
        borderColor: "#2a3546",
        backgroundColor: "#121823",
        position: "relative",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
      }}
    >
      <Box
        sx={{
          width: "180px",
          minWidth: "180px",
          border: "1px solid #2a3546",
          borderRadius: "20px",
          [theme.breakpoints.down("md")]: {
            width: "230px",
            minWidth: "180px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          },
        }}
      >
        <img
          src={cert.image}
          style={{ width: "100%", display: "block" }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>{cert.title}</Typography>
        <Typography sx={{ color: "#9aa4b2", fontSize: "14px", [theme.breakpoints.down("md")]: { textAlign: "center" } }}>
          {t("provider")}: {cert.provider}
        </Typography>
        <Typography sx={{ color: "#9aa4b2", fontSize: "14px", [theme.breakpoints.down("md")]: { textAlign: "center" } }}>
          {t("issued")}: {cert.date}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap", [theme.breakpoints.down("md")]: { justifyContent: "center" } }}>
          {cert.skills.map((skill: string) => (
            <Box
              key={skill}
              className="skill-tag"
              sx={{
                padding: "2px 8px",
                border: "1px solid #2a3546",
                fontFamily: "JetBrains Mono",
                fontSize: "12px",
                "&:hover": {
                  backgroundColor: "#00ffea",
                  color: "#0a0a0a",
                  transform: "scale(1.05)",
                  borderColor: "#00ffea",
                },
              }}
            >
              {skill}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className="spotlight"
        sx={{
          position: "absolute",
          width: 150,
          height: 150,
          background:
            "radial-gradient(circle, rgba(79,195,247,0.15), transparent 70%)",
          pointerEvents: "none",
          opacity: 0,
        }}
      />
    </Box>
  );
}
