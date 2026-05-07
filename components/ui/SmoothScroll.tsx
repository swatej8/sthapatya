"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
            infinite: false,
        });

        // Sync ScrollTrigger with Lenis
        lenis.on("scroll", ScrollTrigger.update);

        // GSAP ticker sync
        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateLenis);

        gsap.ticker.lagSmoothing(0);

        // Handle internal anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");
            if (anchor && anchor.hash && anchor.origin === window.location.origin) {
                e.preventDefault();
                lenis.scrollTo(anchor.hash);
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            lenis.destroy();
            lenis.off("scroll", ScrollTrigger.update);
            gsap.ticker.remove(updateLenis);
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return <>{children}</>;
}
