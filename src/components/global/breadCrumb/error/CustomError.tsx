import { Box, Button, Container, Grid2 as Grid, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FC, ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

interface CustomErrorProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  link: string;
  children: ReactNode;
}

const CustomError: FC<CustomErrorProps> = ({ icon: Icon, link, children }) => {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        p: { xs: 0 },
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          direction: "ltr",
          position: "relative",
        }}
      >
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            zIndex: 3,
          }}
        >
          {children}
          <Link data-testid="backLink" to={link}>
            <Button
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontSize: "10px",
                [theme.breakpoints.up("xs")]: {
                  fontSize: "20px",
                },
              }}
              variant="contained"
              startIcon={<Icon />}
            >
              <Box>{t("return_back")}</Box>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomError;
