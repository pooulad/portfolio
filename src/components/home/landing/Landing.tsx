import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import ProgrammerImage from "../../../assets/images/programmer.png";

interface LandingProps {
  programmerImageRef: any;
  handleFlipAnimation: () => void;
}

function Landing({ programmerImageRef, handleFlipAnimation }: LandingProps) {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          [theme.breakpoints.up("md")]: {
            textAlign: "left",
          },
        }}
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
            color: theme.palette.text.primary,
          }}
          variant="h1"
          gutterBottom
        >
          <span>{t("hi")} </span>
          <span id="waveHand" style={{ display: "inline-block" }}>
            👋🏻
          </span>
        </Typography>
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
          <span>{t("my_name")}</span>
        </Typography>
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
            color: theme.palette.primary.main,
          }}
          variant="h1"
          gutterBottom
        >
          <Typewriter
            options={{
              strings: [
                `${t("my_job")}`,
                `${t("my_job_front")}`,
                `${t("my_job_backend")}`,
                `${t("my_job_software")}`,
                `${t("my_job_opensource")}`,
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "30px auto",
          [theme.breakpoints.up("sm")]: {
            width: "100%",
            margin: "0px",
          },
        }}
      >
        <img
          ref={programmerImageRef}
          onClick={handleFlipAnimation}
          id="programmerImage"
          style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
          src={ProgrammerImage}
          alt="ProgrammerImage"
        />
      </Box>
    </Box>
  );
}

export default Landing;
