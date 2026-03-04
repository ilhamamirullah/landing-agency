"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (isInView) return; // Already triggered, skip

    const isDesktop = window.innerWidth >= 1024;
    const snapContainer = isDesktop
      ? document.querySelector(".snap-container")
      : null;

    // Fallback: manually check if element is visible
    const checkVisibility = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element is at least partially visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsInView(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        root: snapContainer,
        threshold: [0, threshold],
        rootMargin: "50px",
      }
    );

    observer.observe(element);

    // Check immediately in case element is already visible
    checkVisibility();

    // Fallback scroll listener for fast scrolling
    const scrollTarget = snapContainer || window;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      scrollTarget.removeEventListener("scroll", onScroll);
    };
  }, [threshold, isInView]);

  return { ref, isInView };
}