import gsap from "gsap";
import { MouseEventHandler } from "react";

export default function useRotateIconAnimation() {
  const handleEnterIconAnimation: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.currentTarget;
    gsap.to(target, {
      scale: 1.2,
      rotate: 5,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleLeaveIconAnimation: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.currentTarget;
    gsap.to(target, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return { handleEnterIconAnimation, handleLeaveIconAnimation };
}
