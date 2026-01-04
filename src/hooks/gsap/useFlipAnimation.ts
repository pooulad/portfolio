import { useState, RefObject } from "react";
import gsap from "gsap";

export default function useFlipAnimation<T extends HTMLElement>(
  ref: RefObject<T | null>
) {
  const [flipped, setFlipped] = useState(false);
  const handleFlipAnimation = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      scaleX: flipped ? 1 : -1,
      duration: 0.8,
      ease: "power2.inOut",
    });
    setFlipped((prev) => !prev);
  };
  return { handleFlipAnimation };
}
