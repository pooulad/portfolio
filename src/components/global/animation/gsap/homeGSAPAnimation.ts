import { useEffect, useRef, useState } from "react";
import useFlipAnimation from "../../../../hooks/gsap/useFlipAnimation";
import useHandShakeAnimation from "../../../../hooks/gsap/useHandShakeAnimation";
import gsap from "gsap";
import useRotateIconAnimation from "../../../../hooks/gsap/useRotateIconAnimation";

interface HomeGSAPAnimationProps {
  programmerImageRef: any;
  programmerImageID: string;
  handeShakeID: string;
  introduceImageRef: any;
  introduceTextRef: any;
  socialsIconRef: any;
  readMoreButtonRef: any;
  programmerIntroduceImageRef: any;
}

export default function HomeGSAPAnimation({
  programmerImageRef,
  programmerImageID,
  handeShakeID,
  introduceImageRef,
  introduceTextRef,
  socialsIconRef,
  readMoreButtonRef,
  programmerIntroduceImageRef,
}: HomeGSAPAnimationProps) {
  const [introduceTextAnimated, setIntroduceTextAnimated] =
    useState<boolean>(false);
  const [socialsIconAnimated, setSocialsIconAnimated] = useState(false);
  const ellipse1 = useRef<SVGEllipseElement>(null);
  const ellipse2 = useRef<SVGEllipseElement>(null);
  const ellipse3 = useRef<SVGEllipseElement>(null);

  const { handleFlipAnimation } = useFlipAnimation(programmerImageRef);

  const { handleEnterIconAnimation, handleLeaveIconAnimation } =
    useRotateIconAnimation();

  useHandShakeAnimation(handeShakeID);

  // programmerImageID
  useEffect(() => {
    gsap.fromTo(
      programmerImageID,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.to(programmerImageID, {
      y: "-=20",
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  // programmerImageID

  // introduceImageRef
  useEffect(() => {
    const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
    const tl2 = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut" },
    });
    tl1.to(introduceImageRef.current, {
      scale: 1.05,
      duration: 1.5,
      ease: "power1.inOut",
    });
    tl2.to(ellipse1.current, { attr: { rx: 90, ry: 70 }, duration: 1.5 }, 0);
    tl2.to(ellipse2.current, { attr: { rx: 70, ry: 55 }, duration: 1.5 }, 0);
    tl2.to(ellipse3.current, { attr: { rx: 50, ry: 35 }, duration: 1.5 }, 0);
    tl2.to(ellipse1.current, { attr: { rx: 80, ry: 60 }, duration: 1.5 }, 1.5);
    tl2.to(ellipse2.current, { attr: { rx: 60, ry: 45 }, duration: 1.5 }, 1.5);
    tl2.to(ellipse3.current, { attr: { rx: 40, ry: 30 }, duration: 1.5 }, 1.5);
  }, []);
  // introduceImageRef

  // programmerIntroduceImageRef
  const onMouseMoveTiltEffect = (e: React.MouseEvent) => {
    if (!programmerIntroduceImageRef.current) return;
    const rect = programmerIntroduceImageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 20; // increase max tilt angle here (degrees)
    const rotateX = ((y - centerY) / centerY) * maxTilt; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * -maxTilt; // tilt left/right

    gsap.to(programmerIntroduceImageRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 800,
      ease: "power1.out",
      duration: 0.3,
    });
  };

  const onMouseLeaveTiltEffect = () => {
    if (!programmerIntroduceImageRef.current) return;
    gsap.to(programmerIntroduceImageRef.current, {
      rotationX: 0,
      rotationY: 0,
      ease: "power1.out",
      duration: 0.5,
    });
  };
  // programmerIntroduceImageRef

  // readMoreButtonRef
  useEffect(() => {
    const readMoreButton = readMoreButtonRef.current;
    if (!readMoreButton) return;
    const hoverIn = () => {
      gsap.to(readMoreButton, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const hoverOut = () => {
      gsap.to(readMoreButton, {
        scale: 1,
        boxShadow: "none",
        duration: 0.4,
        ease: "power2.out",
      });
    };
    readMoreButton.addEventListener("mouseenter", hoverIn);
    readMoreButton.addEventListener("mouseleave", hoverOut);
    return () => {
      readMoreButton.removeEventListener("mouseenter", hoverIn);
      readMoreButton.removeEventListener("mouseleave", hoverOut);
    };
  }, []);
  // readMoreButtonRef

  // introduceTextRef
  useEffect(() => {
    if (!introduceTextRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !introduceTextAnimated) {
            setIntroduceTextAnimated(true);
            gsap.fromTo(
              introduceTextRef.current.querySelectorAll("span"),
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                ease: "power3.out",
                duration: 0.8,
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(introduceTextRef.current);
    return () => observer.disconnect();
  }, [introduceTextAnimated]);
  // introduceTextRef

  // socialsIconRef
  useEffect(() => {
    if (!socialsIconRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !socialsIconAnimated) {
            setSocialsIconAnimated(true);
            gsap.fromTo(
              socialsIconRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(socialsIconRef.current);
    return () => observer.disconnect();
  }, [socialsIconAnimated]);
  // socialsIconRef

  return {
    handleFlipAnimation,
    ellipse1,
    ellipse2,
    ellipse3,
    handleEnterIconAnimation,
    handleLeaveIconAnimation,
    onMouseLeaveTiltEffect,
    onMouseMoveTiltEffect,
  };
}
