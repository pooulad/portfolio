import { Box, Typography, Grid2 as Grid, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
// import LightBulb from "../../../assets/svg/LightBulb.svg";

gsap.registerPlugin(ScrollTrigger);

const SkillCard = styled(Box)(({ theme }: any) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
  textAlign: "center",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease",
  cursor: "none",
  "&:hover": {
    transform: "scale(1.05)",
    // cursor: `url(${LightBulb}) 16 16, auto`,
  },
}));

const Spotlight = styled(Box)(({ theme }: any) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background:
    theme.palette.mode === "light"
      ? `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`
      : "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
  pointerEvents: "none",
  opacity: 0,
  mixBlendMode: "screen",
  willChange: "transform, opacity",
}));

interface SkillProps {
  skillBoxRef: any;
  skills: any[];
  skillType: string;
}

const Skill = ({ skillBoxRef, skills, skillType }: SkillProps) => {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Box
      ref={skillBoxRef}
      sx={{
        width: "90%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: theme.palette.primary.main,
        }}
      >
        {t(skillType)}
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid
            className="skill-box"
            key={index}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          >
            <SkillCard className="skill-card">
              <Spotlight className="spotlight" />
              <Box
                sx={{
                  mb: 1,
                  color: theme.palette.primary.main,
                }}
              >
                {
                  <skill.icon
                    width={30}
                    height={30}
                    fill={theme.palette.primary.main}
                  />
                }
              </Box>
              <Typography variant="h6" fontWeight="medium">
                {skill.label}
              </Typography>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
