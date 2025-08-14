import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "../../../assets/icons";
import FooterGSAPAnimation from "../animation/gsap/footerGSAPAnimation";
import { socials } from "../contactInfoList";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: TelegramIcon,
};

function Footer() {
  const theme = useTheme();

  const { t } = useTranslation();

  // GSAP
  const { handleEnterIconAnimation, handleLeaveIconAnimation } =
    FooterGSAPAnimation({});
  // GSAP

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          gap: "10px",
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            justifyContent: "flex-end",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "17px",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "20px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            [theme.breakpoints.up("sm")]: {
              textAlign: "left",
            },
          }}
        >{`${t("designed_by")} ${t("poulad")}`}</Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          {`${t("copyright")} ${"©"} ${new Date().getFullYear()}`}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            textAlign: "right",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
            [theme.breakpoints.up("sm")]: {
              flexDirection: "row",
              justifyContent: "flex-end",
            },
          }}
        >
          {socials.map((social, index) => {
            const IconComponent = iconMap[social.label];
            if (!IconComponent) return null;
            return (
              <Box
                key={index}
                id={`footer_link_${social.label}`}
                onMouseEnter={handleEnterIconAnimation}
                onMouseLeave={handleLeaveIconAnimation}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  [theme.breakpoints.up("sm")]: {
                    width: "30px",
                    height: "30px",
                  },
                  [theme.breakpoints.up("md")]: {
                    width: "40px",
                    height: "40px",
                  },
                  [theme.breakpoints.up("lg")]: {
                    width: "45px",
                    height: "45px",
                  },
                  [theme.breakpoints.up("xl")]: {
                    width: "50px",
                    height: "50px",
                  },
                }}
              >
                <Box>
                  <IconComponent
                    width={30}
                    height={30}
                    fill={theme.palette.text.primary}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
