import { useTheme } from "@mui/material";
import gsap from "gsap";
import { useEffect, useState } from "react";

interface HeaderGSAPAnimationProps {
  musicRef: any;
  musicIconRef: any;
  tweenRef: any;
  switchButtonRef: any;
  buttonRef: any;
  colorMode: {
    toggleColorMode: () => void;
  };
  menuIconRef: any;
}

export default function HeaderGSAPAnimation({
  musicRef,
  musicIconRef,
  tweenRef,
  switchButtonRef,
  buttonRef,
  colorMode,
  menuIconRef,
}: HeaderGSAPAnimationProps) {
  const theme = useTheme();

  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  // clickMenuIcon
  const handleClickMenuIcon = () => {
    gsap.fromTo(
      menuIconRef.current,
      { rotate: 0, scale: 1 },
      {
        rotate: 180,
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(menuIconRef.current, { scale: 1, duration: 0.2 });
        },
      }
    );
  };
  // clickMenuIcon

  // toggleMusic
  const toggleMusic = () => {
    if (!musicRef.current) return;
    if (!isPlayingMusic) {
      musicRef.current.volume = 1;
      musicRef.current.play();
      setIsPlayingMusic(true);
    } else {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
      musicRef.current.volume = 0;
      setIsPlayingMusic(false);
    }
  };
  // toggleMusic

  // toggleSwitchButton
  const handleToggleSwitchThemeButton = () => {
    if (!switchButtonRef.current) return;
    gsap.to(switchButtonRef.current, {
      opacity: 0,
      rotation: -90,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        colorMode.toggleColorMode();
      },
    });
  };
  // toggleSwitchButton

  // handleLogoShake
  const handleLogoShake = (event: any) => {
    gsap.fromTo(
      event.currentTarget,
      { rotate: 0 },
      {
        rotate: 15,
        duration: 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 5,
        transformOrigin: "center center",
      }
    );
    gsap.fromTo(
      event.currentTarget,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      }
    );
  };
  // handleLogoShake

  useEffect(() => {
    if (isPlayingMusic) {
      tweenRef.current = gsap.to(musicIconRef.current, {
        rotation: 360,
        duration: 2,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    } else {
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
      gsap.to(musicIconRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [isPlayingMusic]);

  // switchButtonRef
  useEffect(() => {
    if (!switchButtonRef.current || !buttonRef.current) return;
    gsap.fromTo(
      switchButtonRef.current,
      { opacity: 0, rotation: 90 },
      { opacity: 1, rotation: 0, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );
  }, [theme.palette.mode]);
  // switchButtonRef

  return {
    handleLogoShake,
    toggleMusic,
    handleToggleSwitchThemeButton,
    handleClickMenuIcon,
  };
}
