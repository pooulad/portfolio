import { Box } from "@mui/material";
import LanguagePopover from "./LanguagePopover";
import { useTranslation } from "react-i18next";
import { Icons } from "../lucideIcon/LucideIcon";
import NavbarLink from "./NavbarLink";
import { NavbarLinkProps } from "../../../ts/types";

const links: NavbarLinkProps[] = [
  {
    to: "/",
    icon: <Icons.house viewBox="0 0 24 15" height={50} size={20} />,
    label: "home",
  },
  {
    to: "/about",
    icon: <Icons.user viewBox="0 0 24 15" height={50} size={20} />,
    label: "about",
  },
  {
    to: "/projects",
    icon: <Icons.chartSpline viewBox="0 0 24 15" height={50} size={20} />,
    label: "projects",
  },
  {
    to: "/resume",
    icon: (
      <Icons.fileChartColumnIncreasing
        viewBox="0 0 24 15"
        height={50}
        size={20}
      />
    ),
    label: "resume",
  },
  {
    to: "/github",
    icon: <Icons.fileCode viewBox="0 0 24 15" height={50} size={20} />,
    label: "github",
  },
];

function Navbar() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        gap: "5px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <NavbarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={t(link.label)}
          />
        ))}
      </Box>
      <LanguagePopover />
    </Box>
  );
}

export default Navbar;
