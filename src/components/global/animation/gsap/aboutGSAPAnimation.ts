import { RefObject, useEffect } from "react";
import useFlipAnimation from "../../../../hooks/gsap/useFlipAnimation";
import gsap from "gsap";

interface AboutGSAPAnimationProps {
  motorcycleImageRef: RefObject<HTMLImageElement | null>;
  motorcycleImageID: string;
  seeSkillsButtonRef: RefObject<HTMLButtonElement | null>;
  techToolRef: RefObject<HTMLDivElement | null>;
  softRef: RefObject<HTMLDivElement | null>;
  langRef: RefObject<HTMLDivElement | null>;
}

export default function AboutGSAPAnimation({
  motorcycleImageRef,
  motorcycleImageID,
  seeSkillsButtonRef,
  techToolRef,
  softRef,
  langRef,
}: AboutGSAPAnimationProps) {
  const { handleFlipAnimation } = useFlipAnimation(motorcycleImageRef);

  // seeSkillsButtonRef
  useEffect(() => {
    const seeSkillsButton = seeSkillsButtonRef.current;
    if (!seeSkillsButton) return;
    const hoverIn = () => {
      gsap.to(seeSkillsButton, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const hoverOut = () => {
      gsap.to(seeSkillsButton, {
        scale: 1,
        boxShadow: "none",
        duration: 0.4,
        ease: "power2.out",
      });
    };
    seeSkillsButton.addEventListener("mouseenter", hoverIn);
    seeSkillsButton.addEventListener("mouseleave", hoverOut);
    return () => {
      seeSkillsButton.removeEventListener("mouseenter", hoverIn);
      seeSkillsButton.removeEventListener("mouseleave", hoverOut);
    };
  }, []);
  // seeSkillsButtonRef

  // techToolRef
  useEffect(() => {
    const section = techToolRef.current;
    if (!section) return;
    const elements = section.querySelectorAll(".skill-box");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: techToolRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  // techToolRef

  // techToolRef spotLight
  useEffect(() => {
    const section = techToolRef.current;
    if (!section) return;
    const cards = section.querySelectorAll<HTMLElement>(".skill-card");
    cards.forEach((card) => {
      const spotlight = card.querySelector(".spotlight");
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(spotlight, {
          x: x - 75,
          y: y - 75,
          duration: 0.2,
          ease: "power2.out",
        });
      };
      const handleMouseEnter = () => {
        gsap.to(spotlight, { opacity: 1, duration: 0.3 });
      };
      const handleMouseLeave = () => {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
      };
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);
  // techToolRef spotLight

  // softRef
  useEffect(() => {
    const section = softRef.current;
    if (!section) return;
    const elements = section.querySelectorAll<HTMLElement>(".skill-box");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: softRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  // softRef

  // softRef spotLight
  useEffect(() => {
    const section = softRef.current;
    if (!section) return;
    const cards = section.querySelectorAll<HTMLElement>(".skill-card");
    cards.forEach((card) => {
      const spotlight = card.querySelector(".spotlight");
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(spotlight, {
          x: x - 75,
          y: y - 75,
          duration: 0.2,
          ease: "power2.out",
        });
      };
      const handleMouseEnter = () => {
        gsap.to(spotlight, { opacity: 1, duration: 0.3 });
      };
      const handleMouseLeave = () => {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
      };
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);
  // softRef spotLight

  // langRef
  useEffect(() => {
    const section = langRef.current;
    if (!section) return;
    const elements = section.querySelectorAll(".skill-box");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: langRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  // langRef

  // langRef spotLight
  useEffect(() => {
    const section = langRef.current;
    if (!section) return;
    const cards = section.querySelectorAll<HTMLElement>(".skill-card");
    cards.forEach((card) => {
      const spotlight = card.querySelector(".spotlight");
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(spotlight, {
          x: x - 75,
          y: y - 75,
          duration: 0.2,
          ease: "power2.out",
        });
      };
      const handleMouseEnter = () => {
        gsap.to(spotlight, { opacity: 1, duration: 0.3 });
      };
      const handleMouseLeave = () => {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
      };
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);
  // langRef spotLight

  // motorcycleImageID
  useEffect(() => {
    gsap.fromTo(
      motorcycleImageID,
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
    gsap.fromTo(
      motorcycleImageID,
      {
        x: "-=50",
      },
      {
        x: "+=100",
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  // motorcycleImageID

  return {
    handleFlipAnimation,
  };
}
