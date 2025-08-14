import { Box, Button, Typography, useTheme } from "@mui/material";
import AboutImage from "../../assets/images/about.png";
import { useRef } from "react";
import AboutGSAPAnimation from "../../components/global/animation/gsap/aboutGSAPAnimation";
import { useTranslation } from "react-i18next";
import Skill from "../../components/about/skill/Skill";
import useScrollToTargetSection from "../../hooks/useScrollToTargetSection";
import { useNavigate } from "react-router-dom";
import {
  AttentionIcon,
  BashIcon,
  CICDIcon,
  CIcon,
  CommunicationIcon,
  CoolFaceIcon,
  CssIcon,
  DockerIcon,
  EmpathyIcon,
  GithubIcon,
  GitIcon,
  GitlabIcon,
  GoIcon,
  GRPCIcon,
  GsapIcon,
  HtmlIcon,
  InsomniaIcon,
  JavascriptIcon,
  JwtIcon,
  KubernetesIcon,
  LeadershipIcon,
  LightBulbIcon,
  LinuxIcon,
  MaterialUiIcon,
  MicroserviceIcon,
  MotivationIcon,
  MysqlIcon,
  NpmIcon,
  PHPIcon,
  PostgresqlIcon,
  PostmanIcon,
  RabbitMQIcon,
  ReactIcon,
  ReduxIcon,
  RestApiIcon,
  SwaggerIcon,
  TailwindCssIcon,
  TeamworkIcon,
  TestingIcon,
  ThinkingIcon,
  TimeIcon,
  TypescriptIcon,
  VMwareIcon,
  VscodeIcon,
  YarnIcon,
  PythonIcon,
} from "../../assets/icons";

const Languages = [
  { label: "JavaScript", icon: JavascriptIcon },
  { label: "TypeScript", icon: TypescriptIcon },
  { label: "Go (Golang)", icon: GoIcon },
  { label: "PHP", icon: PHPIcon },
  { label: "HTML", icon: HtmlIcon },
  { label: "Python", icon: PythonIcon },
  {
    label: "C",
    icon: CIcon,
  },
];

const TechsTools = [
  { label: "React.js", icon: ReactIcon },
  { label: "CSS", icon: CssIcon },
  { label: "Material UI", icon: MaterialUiIcon },
  { label: "Tailwind CSS", icon: TailwindCssIcon },
  { label: "Redux", icon: ReduxIcon },
  { label: "GSAP", icon: GsapIcon },
  { label: "RESTful API", icon: RestApiIcon },
  { label: "gRPC", icon: GRPCIcon },
  { label: "JWT Auth", icon: JwtIcon },
  { label: "PostgreSQL", icon: PostgresqlIcon },
  { label: "MySQL", icon: MysqlIcon },
  { label: "RabbitMQ", icon: RabbitMQIcon },
  { label: "CI/CD Pipelines", icon: CICDIcon },
  { label: "Yarn", icon: YarnIcon },
  { label: "Npm", icon: NpmIcon },
  { label: "Shell scripting", icon: BashIcon },
  { label: "Docker", icon: DockerIcon },
  { label: "Git", icon: GitIcon },
  { label: "Github", icon: GithubIcon },
  { label: "Gitlab", icon: GitlabIcon },
  { label: "Unit Testing", icon: TestingIcon },
  { label: "Microservices", icon: MicroserviceIcon },
  { label: "Kubernetes", icon: KubernetesIcon },
  { label: "Swagger", icon: SwaggerIcon },
  { label: "Postman", icon: PostmanIcon },
  { label: "Insomnia", icon: InsomniaIcon },
  { label: "VMware", icon: VMwareIcon },
  { label: "VSCODE", icon: VscodeIcon },
  { label: "Linux (Ubuntu / Mint)", icon: LinuxIcon },
];

const SoftSkills = [
  { label: "Teamwork", icon: TeamworkIcon },
  { label: "Communication", icon: CommunicationIcon },
  { label: "Time Management", icon: TimeIcon },
  { label: "Problem Solving", icon: LightBulbIcon },
  { label: "Adaptability", icon: CoolFaceIcon },
  { label: "Empathy", icon: EmpathyIcon },
  { label: "Leadership", icon: LeadershipIcon },
  {
    label: "Attention to Detail",
    icon: AttentionIcon,
  },
  { label: "Self Motivation", icon: MotivationIcon },
  { label: "Critical Thinking", icon: ThinkingIcon },
];

function About() {
  const navigate = useNavigate();

  const theme = useTheme();

  const { t } = useTranslation();

  // GSAP
  const motorcycleImageRef = useRef<HTMLImageElement>(null);
  const seeSkillsButtonRef = useRef<any>(null);
  const techToolRef = useRef(null);
  const softRef = useRef(null);
  const langRef = useRef(null);

  const { handleFlipAnimation } = AboutGSAPAnimation({
    motorcycleImageRef: motorcycleImageRef,
    motorcycleImageID: "#aboutImage",
    seeSkillsButtonRef,
    techToolRef,
    softRef,
    langRef,
  });
  // GSAP

  const { handleScrollToTargetSection } = useScrollToTargetSection();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "150px",
      }}
    >
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
          id="intro"
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
            onClick={handleFlipAnimation}
            ref={motorcycleImageRef}
            id="aboutImage"
            style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
            src={AboutImage}
            alt="AboutImage"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            margin: "30px auto",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            [theme.breakpoints.up("md")]: {
              alignItems: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              width: "100%",
              whiteSpace: "normal",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              textAlign: "justify",
            }}
            variant="h2"
            gutterBottom
          >
            <span>{t("about_me_1")}</span>
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "20px",
              width: "100%",
              whiteSpace: "normal",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              textAlign: "justify",
            }}
            variant="h2"
            gutterBottom
          >
            <span>{t("about_me_2")}</span>
          </Typography>
          <br />
          <Button
            ref={seeSkillsButtonRef}
            variant="contained"
            color="primary"
            onClick={() => {
              handleScrollToTargetSection("skills");
              navigate("/about#skills");
            }}
            sx={{
              borderRadius: "50px",
              paddingX: 4,
              paddingY: 1.5,
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              cursor: "pointer",
              width: "100%",
              [theme.breakpoints.up("md")]: {
                width: "50%",
              },
            }}
          >
            {t("see_skills")}
          </Button>
        </Box>
      </Box>
      <Box
        id="skills"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <Skill skillBoxRef={langRef} skills={Languages} skillType="languages" />
        <Skill
          skillBoxRef={techToolRef}
          skills={TechsTools}
          skillType="techsTools"
        />
        <Skill
          skillBoxRef={softRef}
          skills={SoftSkills}
          skillType="soft_skills"
        />
      </Box>
    </Box>
  );
}

export default About;
