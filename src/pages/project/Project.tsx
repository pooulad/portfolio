import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ProjectCard from "./Card";
import { Fragment, useEffect, useRef, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/icons";
import { projects } from "../../components/project/items";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

function Project() {
  const theme = useTheme();

  const { i18n } = useTranslation();

  const isFa = i18n.language === "fa";

  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY;
    }
  };

  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollByAmount = (amount: number) => {
    if (isFa) {
      scrollRef.current?.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
      scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollButtons();
    el.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);
    return () => {
      el.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 1 },
    });
    tl.to(boxRef.current, { scale: 1.05, ease: "power1.inOut" }).to(
      boxRef.current,
      { scale: 1, ease: "power1.inOut" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
        [theme.breakpoints.up("md")]: {
          gap: "150px",
        },
      }}
    >
      {isFa ? (
        <Fragment>
          <IconButton
            onClick={() => scrollByAmount(300)}
            disabled={!canScrollRight}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              boxShadow: 1,
              opacity: canScrollRight ? 1 : 0.4,
            }}
          >
            <LeftArrowIcon
              width={30}
              height={30}
              fill={theme.palette.primary.main}
            />
          </IconButton>
          <IconButton
            onClick={() => scrollByAmount(-300)}
            disabled={!canScrollLeft}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              boxShadow: 1,
              opacity: canScrollLeft ? 1 : 0.4,
            }}
          >
            <RightArrowIcon
              width={30}
              height={30}
              fill={theme.palette.primary.main}
            />
          </IconButton>
        </Fragment>
      ) : (
        <Fragment>
          <IconButton
            onClick={() => scrollByAmount(-300)}
            disabled={!canScrollLeft}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              boxShadow: 1,
              opacity: canScrollLeft ? 1 : 0.4,
            }}
          >
            <LeftArrowIcon
              width={30}
              height={30}
              fill={theme.palette.primary.main}
            />
          </IconButton>
          <IconButton
            onClick={() => scrollByAmount(300)}
            disabled={!canScrollRight}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              boxShadow: 1,
              opacity: canScrollRight ? 1 : 0.4,
            }}
          >
            <RightArrowIcon
              width={30}
              height={30}
              fill={theme.palette.primary.main}
            />
          </IconButton>
        </Fragment>
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "78vh",
        }}
      >
        <Box
          ref={boxRef}
          sx={{
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
            borderRadius: 2,
            p: 2,
            mb: 3,
            textAlign: "center",
            fontWeight: "medium",
            boxShadow: 1,
          }}
        >
          <Typography variant="body1" component="p">
            Due to the work policies of the companies I have worked for, I am
            unable to show detailed information such as the exact project names
            or real images.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",

            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          ref={scrollRef}
          onWheel={handleWheel}
        >
          {projects.map((project, i) => (
            <Box
              key={`${project.id}-${i}`}
              sx={{
                minWidth: "300px",
                flexShrink: 0,
                display: "flex",
                alignItems: "stretch",
                margin: "0 10px",
                height: "400px",
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.skills}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
