import { Box, Button, useTheme } from "@mui/material";
import useActiveUrlPath from "../../../hooks/useActiveUrlPath";
import { BreadCrumbPaths } from "./breadCrumbPaths";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";

function BreadCrumb() {
  const { t } = useTranslation();

  const { active } = useActiveUrlPath();

  const theme = useTheme();

  const navigate = useNavigate();

  const currentPath = BreadCrumbPaths?.find((item) => item.key === active);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {currentPath?.history?.length !== undefined &&
        currentPath?.history.length === 1 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: theme.palette.text.primary,
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                minWidth: "auto",
                textTransform: "none",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              {t(currentPath.history[0].name)}
            </Button>
            {currentPath?.history?.length !== undefined &&
              currentPath?.history.length > 1 && <Box>{">"}</Box>}
          </Box>
        )}
      {currentPath?.history?.length !== undefined &&
        currentPath?.history.length > 1 && (
          <Fragment>
            {currentPath?.history.filter((item) => item.path !== "/").length >
              0 && (
              <Fragment>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: theme.palette.text.primary,
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      minWidth: "auto",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    {t(currentPath.history[0].name)}
                  </Button>
                  {currentPath?.history?.length !== undefined &&
                    currentPath?.history.length > 1 && <Box>{">"}</Box>}
                </Box>
                {currentPath?.history
                  .filter((item) => item.path !== "/")
                  .map((item, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          onClick={() => {
                            if (item.path !== "/") {
                              navigate(item.path);
                            }
                          }}
                          sx={{
                            color: theme.palette.text.primary,
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            minWidth: "auto",
                            textTransform: "none",
                          }}
                        >
                          <Box>{item?.path !== "/" && t(item?.name)}</Box>
                        </Button>
                        {currentPath?.history.length !== index + 2 && (
                          <Box>{">"}</Box>
                        )}
                      </Box>
                    );
                  })}
              </Fragment>
            )}
          </Fragment>
        )}
    </Box>
  );
}

export default BreadCrumb;
