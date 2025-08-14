import gsap from "gsap";
import { useState } from "react";

export default function useFlipAnimation(ref: any) {
  const [flipped, setFlipped] = useState<boolean>(false);
  const handleFlipAnimation = () => {
    gsap.to(ref.current, {
      scaleX: flipped ? 1 : -1,
      duration: 0.8,
      ease: "power2.inOut",
    });
    setFlipped(!flipped);
  };

  return { handleFlipAnimation };
}
