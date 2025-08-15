import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Fragment, useContext, useRef, useState } from "react";
import MusicUrl from "../../../assets/music/embrace.mp3";
import { ColorModeContext } from "../../../configs/theme/MuiTheme";
import HeaderGSAPAnimation from "../animation/gsap/headerGSAPAnimation";
import { Icons } from "../lucideIcon/LucideIcon";
import LanguagePopover from "./LanguagePopover";
import { useTranslation } from "react-i18next";

function Header() {
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const theme = useTheme();

  const { t } = useTranslation();

  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event: any) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  // GSAP
  const musicRef = useRef<any>(null);
  const musicIconRef = useRef<any>(null);
  const tweenRef = useRef<any>(null);
  const switchButtonRef = useRef<SVGSVGElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuIconRef = useRef<any>(null);

  const {
    handleLogoShake,
    toggleMusic,
    handleToggleSwitchThemeButton,
    handleClickMenuIcon,
  } = HeaderGSAPAnimation({
    musicRef,
    musicIconRef,
    tweenRef,
    switchButtonRef,
    buttonRef,
    colorMode,
    menuIconRef,
  });
  // GSAP

  return (
    <Box
      sx={{
        width: "100%",
        height: "64px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "10px 20px", sm: "10px 30px", md: "10px 50px" },
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backdropFilter: "blur(6px)",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          [theme.breakpoints.up("lg")]: {
            width: "100%",
          },
        }}
      >
        <IconButton
          onClick={() => navigate("/")}
          onMouseEnter={handleLogoShake}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          P
        </IconButton>
        <IconButton
          onClick={toggleMusic}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          <Icons.music ref={musicIconRef} />
        </IconButton>
        <audio ref={musicRef} loop>
          <source src={MusicUrl} type="audio/mpeg" />
        </audio>
        <IconButton
          ref={buttonRef}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "30px",
          }}
          onClick={handleToggleSwitchThemeButton}
          aria-label="Toggle light/dark mode"
        >
          {theme.palette.mode === "dark" ? (
            <Icons.sun ref={switchButtonRef} />
          ) : (
            <Icons.moon ref={switchButtonRef} />
          )}
        </IconButton>
      </Box>
      {isSmall ? (
        <Fragment>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LanguagePopover />
            <IconButton
              ref={menuIconRef}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                color: theme.palette.primary.main,
                fontWeight: "bold",
                fontSize: "30px",
              }}
              onClick={(e) => {
                handleClickMenuIcon();
                openMenu(e);
              }}
            >
              <Icons.menu />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem
              onClick={() => {
                navigate("/");
                closeMenu();
              }}
            >
              {t("home")}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/about");
                closeMenu();
              }}
            >
              {t("about")}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/projects");
                closeMenu();
              }}
            >
              {t("projects")}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/resume");
                closeMenu();
              }}
            >
              {t("resume")}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/github");
                closeMenu();
              }}
            >
              {t("github")}
            </MenuItem>
          </Menu>
        </Fragment>
      ) : (
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Navbar />
        </Box>
      )}
    </Box>
  );
}

export default Header;
