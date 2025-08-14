import gsap from "gsap";

export default function useRotateIconAnimation() {
  const handleEnterIconAnimation = (event: any) => {
    const target = event.currentTarget;
    gsap.to(target, {
      scale: 1.2,
      rotate: 5,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleLeaveIconAnimation = (event: any) => {
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
