import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Mounts Lenis smooth scrolling for the page it lives on and exposes the
 * instance at window.__lenis so anchor navigation (ScrollToAnchor) can use it.
 * Adds `lenis-active` to <html> to disable native CSS smooth scrolling.
 */
const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -88 },
    });
    window.__lenis = lenis;
    document.documentElement.classList.add("lenis-active");

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
      document.documentElement.classList.remove("lenis-active");
    };
  }, []);

  return null;
};

export default SmoothScroll;
