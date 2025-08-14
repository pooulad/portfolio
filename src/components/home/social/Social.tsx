import { Box, Typography, useTheme } from "@mui/material";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "../../../assets/icons";
import { useTranslation } from "react-i18next";
import { socials } from "../../global/contactInfoList";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: TelegramIcon,
};

interface SocialProps {
  socialsIconRef: any;
  handleEnterIconAnimation: (event: any) => void;
  handleLeaveIconAnimation: (event: any) => void;
}

function Social({
  socialsIconRef,
  handleEnterIconAnimation,
  handleLeaveIconAnimation,
}: SocialProps) {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        textAlign: "center",
      }}
      ref={socialsIconRef}
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
        <span>{t("find_me_on")}</span>
      </Typography>
      <Typography sx={{ fontSize: "20px" }} variant="h3" gutterBottom>
        <span>{t("feel_free")}</span>
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
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
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
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
  );
}

export default Social;
