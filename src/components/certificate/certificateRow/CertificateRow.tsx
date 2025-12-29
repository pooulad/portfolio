import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Certification } from "../../../ts/types";
import { useAppDispatch } from "../../../app/hooks";
import { certificateModalOpenAction } from "../../global/certificateModal/certificateModal";

interface Props {
  cert: Certification;
}

export default function CertificateRow({ cert }: Props) {
  const theme = useTheme()

  const { t } = useTranslation()

  const dispatch = useAppDispatch();

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
        borderRadius: "20px",
        backgroundColor: theme.palette.background.paper,
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
          onClick={() => {
            dispatch(
              certificateModalOpenAction({
                certificateData: cert
              })
            );
          }}
          src={cert.image}
          style={{ width: "100%", display: "block", cursor: "pointer" }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Tooltip
          onClick={() => {
            dispatch(
              certificateModalOpenAction({
                certificateData: cert
              })
            );
          }}
          title={cert.title}
          placement="top"
          arrow
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              cursor: "pointer",
            }}
          >
            {cert.title.length > 30
              ? cert.title.slice(0, 30) + "..."
              : cert.title}
          </Typography>
        </Tooltip>
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
    </Box >
  );
}
