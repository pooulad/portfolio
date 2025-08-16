import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { useLayoutEffect } from "react";
import { CacheProvider } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useLanguage from "../../hooks/useLanguage";
import { cacheLtr, cacheRtl } from "../../configs/theme/MuiTheme";
import Header from "../../components/global/header/Header";
import { root, rootDirectionCacheAction } from "./rootSlice";
import SnowParticle from "../../components/global/particles/SnowParticle";
import Footer from "../../components/global/footer/Footer";

function Root() {
  const theme = useTheme();

  const { dir } = useAppSelector(root);

  const dispatch = useAppDispatch();

  const { currentLanguage } = useLanguage();

  useLayoutEffect(() => {
    dispatch(rootDirectionCacheAction(currentLanguage?.dir || "ltr"));
  }, [currentLanguage]);

  return (
    <CacheProvider value={dir === "rtl" ? cacheRtl : cacheLtr}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "visible",
        }}
      >
        <Header /> 
        <SnowParticle />
        <Box
          id="modalContainer"
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                color: theme.palette.text.primary,
              }}
            >
              <Outlet />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </CacheProvider>
  );
}

export default Root;
