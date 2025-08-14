import { useLayoutEffect, useEffect, useCallback } from "react";
import SplitType from "split-type";
import { GithubProfileInfo } from "../../../../ts/types";
import gsap from "gsap";

interface GithubGSAPAnimationProps {
  profileData: GithubProfileInfo;
  avatarRef: any;
  nameRef: any;
  bioRef: any;
  reposSectionRef: any;
  prsSectionRef: any;
  eventsSectionRef: any;
  repos: any;
  prs: any;
  events: any;
}

export default function GithubGSAPAnimation({
  profileData,
  avatarRef,
  nameRef,
  bioRef,
  reposSectionRef,
  prsSectionRef,
  eventsSectionRef,
  repos,
  prs,
  events,
}: GithubGSAPAnimationProps) {
  useLayoutEffect(() => {
    if (!profileData?.name || !nameRef.current) return;
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        const split = new SplitType(nameRef.current!, { types: "chars" });
        const chars = split.chars;
        gsap.set(nameRef.current!, { opacity: 1 });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.from(chars, {
          duration: 1,
          y: 100,
          rotation: 90,
          opacity: 0,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.03,
        });
        tl.to(
          chars,
          {
            duration: 2.5,
            opacity: 0,
            rotation: () => gsap.utils.random(-2000, 2000),
            x: () => gsap.utils.random(-300, 300),
            y: () => gsap.utils.random(-600, -300),
            ease: "power4.in",
            stagger: 0.015,
          },
          3
        );
        return () => {
          try {
            split.revert();
          } catch {}
        };
      });
    }, reposSectionRef);
    return () => ctx.revert();
  }, [profileData?.name]);

  useLayoutEffect(() => {
    if (!profileData?.name || !bioRef.current) return;
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        const split = new SplitType(bioRef.current!, { types: "chars" });
        const chars = split.chars;
        gsap.set(bioRef.current!, { opacity: 1 });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.from(
          split.chars,
          {
            duration: 0.3,
            opacity: 0,
            y: 10,
            stagger: 0.02,
            ease: "power2.out",
          },
          "+=0.1"
        );
        tl.to(
          chars,
          {
            duration: 2.5,
            opacity: 0,
            rotation: () => gsap.utils.random(-2000, 2000),
            x: () => gsap.utils.random(-300, 300),
            y: () => gsap.utils.random(-600, -300),
            ease: "power4.in",
            stagger: 0.015,
          },
          3
        );
        return () => {
          try {
            split.revert();
          } catch {}
        };
      });
    }, reposSectionRef);
    return () => ctx.revert();
  }, [profileData?.name]);

  useEffect(() => {
    if (!reposSectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = reposSectionRef.current.querySelectorAll(".animate-card");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reposSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, reposSectionRef);
    return () => ctx.revert();
  }, [repos, prs, events]);

  useEffect(() => {
    if (!prsSectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = prsSectionRef.current.querySelectorAll(".animate-card");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: prsSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, prsSectionRef);
    return () => ctx.revert();
  }, [repos, prs, events]);

  useEffect(() => {
    if (!eventsSectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = eventsSectionRef.current.querySelectorAll(".animate-card");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eventsSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, eventsSectionRef);
    return () => ctx.revert();
  }, [repos, prs, events]);

  const flipAnimation = useCallback(() => {
    gsap.fromTo(
      avatarRef.current,
      { rotateY: 0, scale: 0.8, opacity: 0.8 },
      {
        rotateY: 1080,
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);

  useLayoutEffect(() => {
    if (!profileData?.name) return;
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        flipAnimation();
      });
    });
    return () => ctx.revert();
  }, [flipAnimation, profileData?.name]);

  return { flipAnimation };
}
