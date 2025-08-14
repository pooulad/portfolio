import { Box, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { NavbarLinkProps } from "../../../ts/types";

const NavbarLink = ({ to, icon, label, underlineColor }: NavbarLinkProps) => {
  const theme = useTheme();

  return (
    <Box
      component={RouterLink}
      to={to}
      sx={{
        position: "relative",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        [theme.breakpoints.up("lg")]: {
          fontSize: "20px",
        },
        gap: "6px",
        color: "inherit",
        textDecoration: "none",
        px: 1,
        py: 0.5,
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "5px",
          borderRadius: "10px",
          width: "100%",
          backgroundColor: underlineColor || theme.palette.primary.main,
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 0.3s ease-out",
        },
        "&:hover::after": {
          transform: "scaleX(1)",
          transformOrigin: "left center",
        },
        "&:not(:hover)::after": {
          transform: "scaleX(0)",
          transformOrigin: "right center",
        },
      }}
    >
      {icon && <Box component="span">{icon}</Box>}
      <Box component="span">{label}</Box>
    </Box>
  );
};

export default NavbarLink;
