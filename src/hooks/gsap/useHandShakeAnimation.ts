import gsap from "gsap";
import { useEffect } from "react";

export default function useHandShakeAnimation(id: string) {
  useEffect(() => {
    gsap.fromTo(
      id,
      { rotate: 0 },
      {
        rotate: 20,
        duration: 0.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "bottom center",
      }
    );
  }, []);
}
