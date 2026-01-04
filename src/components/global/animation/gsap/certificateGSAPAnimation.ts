import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CertificatesGSAPAnimationProps {
    listRef: RefObject<HTMLDivElement | null>;
}

export default function CertificatesGSAPAnimation({ listRef }: CertificatesGSAPAnimationProps) {
    // list animation
    useEffect(() => {
        const section = listRef.current;
        if (!section) return;
        const rows = section.querySelectorAll<HTMLElement>(".cert-row");
        if (!rows.length) return;
        gsap.fromTo(
            rows,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 80%",
                },
            }
        );
    }, [listRef]);
    // list animation

    // spotlight animation
    useEffect(() => {
        const section = listRef.current;
        if (!section) return;
        const cards = section.querySelectorAll<HTMLElement>(".cert-row");
        const listeners: { card: HTMLElement; move: (e: MouseEvent) => void }[] = [];
        cards.forEach((card) => {
            const spotlight = card.querySelector(".spotlight");
            if (!spotlight) return;

            const move = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                gsap.to(spotlight, {
                    x: e.clientX - rect.left - 75,
                    y: e.clientY - rect.top - 75,
                    duration: 0.2,
                    ease: "power2.out",
                });
            };
            card.addEventListener("mousemove", move);
            card.addEventListener("mouseenter", () =>
                gsap.to(spotlight, { opacity: 1, duration: 0.3 })
            );
            card.addEventListener("mouseleave", () =>
                gsap.to(spotlight, { opacity: 0, duration: 0.3 })
            );
            listeners.push({ card, move });
        });
        return () => {
            listeners.forEach(({ card, move }) => {
                card.removeEventListener("mousemove", move);
            });
        };
    }, [listRef]);
    // spotlight animation
    return null;
}
