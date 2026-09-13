"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * 20+ Years Senior Animation Engineer GSAP Toolkit
 * Coordinated 4-Directional ScrollTrigger System:
 * - Left to Right
 * - Right to Left
 * - Bottom to Up (Upward)
 * - Top to Bottom (Downward)
 */

export const setupGSAPAnimations = (containerRef: React.RefObject<HTMLElement | null>) => {
  if (typeof window === "undefined" || !containerRef.current) return () => {};

  const ctx = gsap.context(() => {
    // 1. REVEAL FROM LEFT (Smooth horizontal spring slide-in)
    gsap.utils.toArray<HTMLElement>(".gsap-reveal-left").forEach((el) => {
      gsap.fromTo(
        el,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 2. REVEAL FROM RIGHT (Smooth slide-in with subtle 3D depth)
    gsap.utils.toArray<HTMLElement>(".gsap-reveal-right").forEach((el) => {
      gsap.fromTo(
        el,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 3. REVEAL FROM BOTTOM / UPWARD (Classic elevation with stagger)
    gsap.utils.toArray<HTMLElement>(".gsap-reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 4. REVEAL FROM TOP / DOWNWARD (Drop-down entrance)
    gsap.utils.toArray<HTMLElement>(".gsap-reveal-down").forEach((el) => {
      gsap.fromTo(
        el,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 5. STAGGERED GRID CARDS (Sequential cascade)
    gsap.utils.toArray<HTMLElement>(".gsap-stagger-group").forEach((group) => {
      const items = group.querySelectorAll(".gsap-stagger-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // 6. GENTLE IDLE FLOATING ELEMENTS (Breathing physics)
    gsap.utils.toArray<HTMLElement>(".gsap-float").forEach((el, index) => {
      gsap.to(el, {
        y: -10,
        duration: 2.2 + (index % 3) * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // 7. PULSE GLOW
    gsap.utils.toArray<HTMLElement>(".gsap-glow-pulse").forEach((el) => {
      gsap.to(el, {
        boxShadow: "0 0 30px rgba(245, 158, 11, 0.45)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, containerRef);

  return () => ctx.revert();
};
