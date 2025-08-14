import { FC, useEffect, useRef } from "react";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Grid2 as Grid,
  Link,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { config } from "../../configs/api/config";
import {
  github,
  githubGetEvents,
  githubGetProfile,
  githubGetPrs,
  githubGetRepos,
} from "./githubSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LoadingSpinner from "../../components/global/loading/loadingSpinner/LoadingSpinner";
import GithubGSAPAnimation from "../../components/global/animation/gsap/githubGSAPAnimation";
import { ForkIcon, StarIcon } from "../../assets/icons";
gsap.registerPlugin(ScrollTrigger);

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const Github: FC = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const {
    profile: { data: profileData },
    repos,
    prs,
    events,
  } = useAppSelector(github);

  // GSAP
  const reposSectionRef = useRef<HTMLDivElement>(null);
  const prsSectionRef = useRef<HTMLDivElement>(null);
  const eventsSectionRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  const { flipAnimation } = GithubGSAPAnimation({
    profileData,
    avatarRef,
    nameRef,
    bioRef,
    reposSectionRef,
    prsSectionRef,
    eventsSectionRef,
    repos,
    prs,
    events,
  });
  // GSAP

  useEffect(() => {
    dispatch(githubGetRepos());
    dispatch(githubGetProfile());
    dispatch(githubGetEvents());
    dispatch(githubGetPrs());
  }, []);

  if (!profileData?.name) {
    return <LoadingSpinner height="78vh" />;
  }

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
        }}
      >
        <Tooltip placement="top" title={t("click_me")} arrow>
          <Avatar
            ref={avatarRef}
            onClick={flipAnimation}
            src={profileData.avatar_url}
            alt={profileData.name || profileData.login}
            sx={{
              width: 140,
              height: 140,
              mx: "auto",
              mb: 2,
              border: `4px solid ${theme.palette.primary.main}`,
              transformStyle: "preserve-3d",
              cursor: "pointer",
            }}
          />
        </Tooltip>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          color={theme.palette.primary.main}
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
        >
          <span
            ref={nameRef}
            style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
          >
            @{profileData.name || profileData.login}
          </span>
        </Typography>
        <Typography
          variant="h6"
          color={theme.palette.text.disabled}
          sx={{ mb: 1, fontStyle: "italic" }}
        >
          <span
            ref={bioRef}
            style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
          >
            {profileData.bio || "Passionate Developer & Open Source Enthusiast"}
          </span>
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="/resume"
          sx={{
            mt: 2,
            px: 5,
            boxShadow: `0 0 10px 3px ${theme.palette.text.disabled}`,
            "&:hover": {
              boxShadow: `0 0 20px 6px ${theme.palette.secondary.main}`,
              color: theme.palette.text.primary,
            },
          }}
        >
          {t("see_resume")}
        </Button>
      </Box>
      <Box sx={{ width: "90%" }} ref={reposSectionRef}>
        <Typography
          variant="h4"
          mb={4}
          fontWeight={700}
          color={theme.palette.primary.main}
          sx={{
            fontSize: "10px",
            [theme.breakpoints.up("xs")]: {
              fontSize: "20px",
              textAlign: "left",
            },
            [theme.breakpoints.up("sm")]: {
              fontSize: "30px",
            },
            [theme.breakpoints.down("sm")]: {
              textAlign: "center",
            },
          }}
        >
          {t("top_stared_repos")}
        </Typography>
        {repos.data.length > 0 && !repos.error ? (
          <Grid container spacing={4}>
            {repos.data.map((repo) => (
              <Grid key={repo.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  className="animate-card"
                  elevation={5}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                  }}
                  onClick={() => window.open(repo.html_url, "_blank")}
                  tabIndex={0}
                  aria-label={`Open repository ${repo.name} on GitHub`}
                >
                  <Typography variant="h6" fontWeight="700" mb={1} noWrap>
                    {repo.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1, mb: 2, minHeight: 64 }}
                  >
                    {repo.description || "No description"}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "red",
                      fontWeight: 600,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: theme.palette.primary.main,
                      }}
                    >
                      <StarIcon
                        width={20}
                        height={20}
                        fill={theme.palette.primary.main}
                      />
                      {repo.stargazers_count}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "#1976d2",
                      }}
                    >
                      <ForkIcon width={20} height={20} fill={"#1976d2"} />
                      {repo.forks_count}
                    </Box>
                    <Typography sx={{ color: theme.palette.text.primary }}>
                      {repo.language || "N/A"}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              {t("failed_to_load_data")}
            </Grid>
          </Grid>
        )}
      </Box>
      <Box sx={{ width: "90%" }} ref={prsSectionRef}>
        <Typography
          variant="h4"
          mb={4}
          fontWeight={700}
          color={theme.palette.primary.main}
          sx={{
            fontSize: "10px",
            [theme.breakpoints.up("xs")]: {
              fontSize: "20px",
              textAlign: "left",
            },
            [theme.breakpoints.up("sm")]: {
              fontSize: "30px",
            },
            [theme.breakpoints.down("sm")]: {
              textAlign: "center",
            },
          }}
        >
          {t("latest_pull_requests")}
        </Typography>
        {prs.data.length > 0 && !prs.error ? (
          <Grid container spacing={3}>
            {prs.data.map((pr) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={pr.id}>
                <Paper
                  className="animate-card"
                  elevation={5}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                  }}
                  onClick={() => window.open(pr.html_url, "_blank")}
                  tabIndex={0}
                  aria-label={`View pull request ${pr.title}`}
                >
                  <Typography variant="subtitle1" fontWeight="600" noWrap>
                    {pr.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Repository: {pr.repo_name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={pr.state === "open" ? "green" : "red"}
                    fontWeight="bold"
                  >
                    {pr.state.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    mt={1}
                    color="text.secondary"
                  >
                    Created: {formatDate(pr.created_at)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              {t("failed_to_load_data")}
            </Grid>
          </Grid>
        )}
      </Box>
      <Box sx={{ width: "90%" }} ref={eventsSectionRef}>
        <Typography
          variant="h4"
          mb={4}
          fontWeight={700}
          color={theme.palette.primary.main}
          sx={{
            fontSize: "10px",
            [theme.breakpoints.up("xs")]: {
              fontSize: "20px",
              textAlign: "left",
            },
            [theme.breakpoints.up("sm")]: {
              fontSize: "30px",
            },
            [theme.breakpoints.down("sm")]: {
              textAlign: "center",
            },
          }}
        >
          {t("recent_github_activities")}
        </Typography>
        {events.data.length > 0 && !events.error ? (
          <Grid container spacing={3}>
            {events.data.map((event) => {
              const date = formatDate(event.created_at);
              let description = "";
              switch (event.type) {
                case "PushEvent":
                  description = `Pushed to ${event.payload.ref?.replace("refs/heads/", "")}`;
                  break;
                case "PullRequestEvent":
                  description = `${event.payload.action} pull request`;
                  break;
                case "IssuesEvent":
                  description = `${event.payload.action} issue`;
                  break;
                default:
                  description = event.type;
              }
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
                  <Paper
                    className="animate-card"
                    elevation={2}
                    sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                  }}
                    tabIndex={0}
                    aria-label={`${event.type} event on repository ${event.repo.name}`}
                  >
                    <Typography variant="subtitle2" fontWeight="600" noWrap>
                      {description}
                    </Typography>
                    <Link
                      href={`${config.github_api}${event.repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ display: "block", mb: 1 }}
                    >
                      {event.repo.name}
                    </Link>
                    <Typography variant="caption" color="text.secondary">
                      {date}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              {t("failed_to_load_data")}
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Github;
