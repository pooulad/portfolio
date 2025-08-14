import { Box, Divider, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Icons } from "../../components/global/lucideIcon/LucideIcon";
import CustomError from "../../components/global/breadCrumb/error/CustomError";
import { CacheProvider } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { root, rootDirectionCacheAction } from "../../layouts/root/rootSlice";
import { useLayoutEffect } from "react";
import useLanguage from "../../hooks/useLanguage";
import { cacheLtr, cacheRtl } from "../../configs/theme/MuiTheme";

function NotFound() {
  const dispatch = useAppDispatch();

  const theme = useTheme();

  const { t } = useTranslation();

  const { dir } = useAppSelector(root);

  const { currentLanguage } = useLanguage();

  useLayoutEffect(() => {
    dispatch(rootDirectionCacheAction(currentLanguage?.dir || "ltr"));
  }, [currentLanguage]);

  return (
    <CacheProvider value={dir === "rtl" ? cacheRtl : cacheLtr}>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          {/* <svg
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,186.7C1120,203,1280,213,1360,218.7L1440,224V600H1360C1280,600,1120,600,960,600C800,600,640,600,480,600C320,600,160,600,80,600H0Z"
              fill={theme.palette.primary.light}
              opacity="0.25"
            />
            <path
              d="M0,224L80,229.3C160,235,320,245,480,240C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224V600H1360C1280,600,1120,600,960,600C800,600,640,600,480,600C320,600,160,600,80,600H0Z"
              fill={theme.palette.primary.main}
              opacity="0.4"
            />
            <path
              d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224V600H1360C1280,600,1120,600,960,600C800,600,640,600,480,600C320,600,160,600,80,600H0Z"
              fill={theme.palette.primary.dark}
              opacity="0.5"
            />
          </svg> */}
        </Box>
        <CustomError icon={Icons.house} link="/">
          <Box
            data-testid="errorBox"
            sx={{
              zIndex: 2,
              color: theme.palette.text.primary,
              fontSize: "32px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                fontSize: "10px",
                [theme.breakpoints.up("xs")]: {
                  fontSize: "20px",
                },
                [theme.breakpoints.up("sm")]: {
                  fontSize: "30px",
                },
              }}
              data-testid="notFoundCode"
            >
              {"404"}
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: theme.palette.text.primary,
                height: "40px",
              }}
            />
            <Box
              sx={{
                fontSize: "10px",
                [theme.breakpoints.up("xs")]: {
                  fontSize: "20px",
                },
                [theme.breakpoints.up("sm")]: {
                  fontSize: "30px",
                },
              }}
              data-testid="notFoundMessage"
            >
              {t("page_not_found")}
            </Box>
          </Box>
        </CustomError>
      </Box>
    </CacheProvider>
  );
}

export default NotFound;
