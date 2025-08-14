import { Box, useTheme } from "@mui/material";
import { useRef } from "react";
import HomeGSAPAnimation from "../../components/global/animation/gsap/homeGSAPAnimation";
import Social from "../../components/home/social/Social";
import Introduce from "../../components/home/introduce/Introduce";
import Landing from "../../components/home/landing/Landing";

function Home() {
  const theme = useTheme();

  // GSAP
  const programmerImageRef = useRef(null);
  const introduceImageRef = useRef(null);
  const introduceTextRef = useRef(null);
  const socialsIconRef = useRef(null);
  const readMoreButtonRef = useRef<HTMLButtonElement>(null);
  const programmerIntroduceImageRef = useRef(null);

  const {
    handleFlipAnimation,
    ellipse1,
    ellipse2,
    ellipse3,
    handleEnterIconAnimation,
    handleLeaveIconAnimation,
    onMouseLeaveTiltEffect,
    onMouseMoveTiltEffect,
  } = HomeGSAPAnimation({
    programmerImageRef: programmerImageRef,
    programmerImageID: "#programmerImage",
    handeShakeID: "#waveHand",
    introduceImageRef: introduceImageRef,
    introduceTextRef: introduceTextRef,
    socialsIconRef: socialsIconRef,
    readMoreButtonRef: readMoreButtonRef,
    programmerIntroduceImageRef: programmerIntroduceImageRef,
  });
  // GSAP

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
      <Landing
        handleFlipAnimation={handleFlipAnimation}
        programmerImageRef={programmerImageRef}
      />
      <Introduce
        ellipse1={ellipse1}
        ellipse2={ellipse2}
        ellipse3={ellipse3}
        introduceTextRef={introduceTextRef}
        readMoreButtonRef={readMoreButtonRef}
        programmerIntroduceImageRef={programmerIntroduceImageRef}
        onMouseLeaveTiltEffect={onMouseLeaveTiltEffect}
        onMouseMoveTiltEffect={onMouseMoveTiltEffect}
      />
      <Social
        socialsIconRef={socialsIconRef}
        handleEnterIconAnimation={handleEnterIconAnimation}
        handleLeaveIconAnimation={handleLeaveIconAnimation}
      />
    </Box>
  );
}

export default Home;
