import {
  alpha,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  styled,
  useTheme,
} from "@mui/material";
import { Icons } from "../lucideIcon/LucideIcon";
import { useAppDispatch } from "../../../app/hooks";
import { languageList } from "../../../configs/language/utils";
import i18next from "i18next";
import { rootDirectionCacheAction } from "../../../layouts/root/rootSlice";
import { MouseEvent, useState } from "react";
import useLanguage from "../../../hooks/useLanguage";
import useRotateIconAnimation from "../../../hooks/gsap/useRotateIconAnimation";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 4,
    minWidth: 200,
    color:
      theme.palette.mode === "light"
        ? theme.palette.text.primary
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    backgroundColor: "white",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function LanguagePopover() {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const handleChangeLanguage: (code: string, dir: string) => void = (
    code: string,
    dir: string
  ) => {
    dispatch(rootDirectionCacheAction(dir));
    i18next.changeLanguage(code);
    setAnchorElLang(null);
  };

  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const openLang = Boolean(anchorElLang);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElLang(null);
  };

  const { currentLanguage } = useLanguage();

  const { handleEnterIconAnimation, handleLeaveIconAnimation } =
    useRotateIconAnimation();

  return (
    <Box>
      <IconButton
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={handleEnterIconAnimation}
        onMouseLeave={handleLeaveIconAnimation}
        id="lang-button"
        aria-controls={openLang ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openLang ? "true" : undefined}
        onClick={handleClick}
        color="primary"
      >
        <Icons.languages color={theme.palette.primary.main} />
      </IconButton>
      <StyledMenu
        id="lang-menu"
        anchorEl={anchorElLang}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: currentLanguage?.dir === "rtl" ? "left" : "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: currentLanguage?.dir === "rtl" ? "left" : "right",
        }}
        open={openLang}
        onClose={handleClose}
      >
        {languageList.map(({ code, name, country_code, dir }) => (
          <MenuItem
            onClick={() => handleChangeLanguage(code, dir)}
            sx={{
              backgroundColor:
                i18next.language === code
                  ? theme.palette.primary.main
                  : "#FFFFFF",
              padding: "10px",
              color:
                i18next.language === code
                  ? theme.palette.primary.contrastText
                  : "#000000",
            }}
            key={country_code}
            value={code}
          >
            <Box>{name}</Box>
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
}

export default LanguagePopover;
