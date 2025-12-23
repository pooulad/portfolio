import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CertificatesGSAPAnimationProps {
    listRef: any;
}

export default function CertificatesGSAPAnimation({ listRef }: CertificatesGSAPAnimationProps) {
    // list animation
    useEffect(() => {
        if (!listRef.current) return;

        const rows = listRef.current.querySelectorAll(".cert-row");
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
        if (!listRef.current) return;

        const cards = listRef.current.querySelectorAll(".cert-row");

        const listeners: { card: Element; move: any }[] = [];

        cards.forEach((card: any) => {
            const spotlight = card.querySelector(".spotlight");
            if (!spotlight) return;

            const move = (e: any) => {
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
