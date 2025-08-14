import { Box, Button, Typography, useTheme } from "@mui/material";
import ProgrammerIntroduceImage from "../../../assets/images/programmer_introduce.png";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

interface IntroduceProps {
  ellipse1: any;
  ellipse2: any;
  ellipse3: any;
  introduceTextRef: any;
  readMoreButtonRef: any;
  programmerIntroduceImageRef: any;
  onMouseMoveTiltEffect: any;
  onMouseLeaveTiltEffect: any;
}

function Introduce({
  ellipse1,
  ellipse2,
  ellipse3,
  introduceTextRef,
  readMoreButtonRef,
  programmerIntroduceImageRef,
  onMouseLeaveTiltEffect,
  onMouseMoveTiltEffect,
}: IntroduceProps) {
  const AnyLink = HashLink as any;

  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          margin: "30px auto",
          [theme.breakpoints.up("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.up("md")]: {
            width: "30%",
          },
        }}
        ref={programmerIntroduceImageRef}
        onMouseMove={onMouseMoveTiltEffect}
        onMouseLeave={onMouseLeaveTiltEffect}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "140%",
            height: "140%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        >
          <defs>
            <radialGradient id="gradTunnel" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor={theme.palette.primary.main}
                stopOpacity="0.9"
              />
              <stop
                offset="70%"
                stopColor={theme.palette.primary.main}
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor={theme.palette.primary.main}
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          <ellipse
            ref={ellipse1}
            cx="100"
            cy="100"
            rx="80"
            ry="60"
            fill="url(#gradTunnel)"
            stroke={theme.palette.primary.main}
            strokeWidth="2"
          />
          <ellipse
            ref={ellipse2}
            cx="100"
            cy="100"
            rx="60"
            ry="45"
            fill="none"
            stroke={theme.palette.primary.main}
            strokeWidth="2"
            opacity="0.6"
          />
          <ellipse
            ref={ellipse3}
            cx="100"
            cy="100"
            rx="40"
            ry="30"
            fill="none"
            stroke={theme.palette.primary.main}
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            overflow: "visible",
          }}
        >
          <img
            style={{
              width: "100%",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
            src={ProgrammerIntroduceImage}
            alt="ProgrammerIntroduceImage"
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          [theme.breakpoints.up("md")]: {
            alignItems: "flex-end",
            textAlign: "right",
          },
        }}
        ref={introduceTextRef}
      >
        <Typography
          sx={{
            fontSize: "10px",
            [theme.breakpoints.up("xs")]: {
              fontSize: "20px",
            },
            [theme.breakpoints.up("sm")]: {
              fontSize: "30px",
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "40px",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "50px",
            },
          }}
          variant="h1"
          gutterBottom
        >
          <span>{t("let_me")} </span>
          <span style={{ color: theme.palette.primary.main }}>
            {t("introduce")}{" "}
          </span>
          <span>{t("myself")} </span>
        </Typography>
        <Typography sx={{ fontSize: "20px" }} variant="h2" gutterBottom>
          <span>{t("introduce_sentence_1")}</span>
        </Typography>
        <Typography sx={{ fontSize: "20px" }} variant="h2" gutterBottom>
          <span>{t("introduce_sentence_2")}</span>
        </Typography>
        <Typography sx={{ fontSize: "20px" }} variant="h2" gutterBottom>
          <span>{t("introduce_sentence_3")}</span>
        </Typography>
        <Typography sx={{ fontSize: "20px" }} variant="h2" gutterBottom>
          <span>{t("introduce_sentence_4")}</span>
        </Typography>
        <Typography sx={{ fontSize: "20px" }} variant="h2" gutterBottom>
          <span>{t("introduce_sentence_5")}</span>
        </Typography>
        <AnyLink smooth to="/about#intro">
          <Button
            ref={readMoreButtonRef}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              paddingX: 4,
              paddingY: 1.5,
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              cursor: "pointer",
            }}
          >
            {t("more_about_me")}
          </Button>
        </AnyLink>
      </Box>
    </Box>
  );
}

export default Introduce;
