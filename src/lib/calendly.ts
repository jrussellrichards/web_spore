// Prefer Vite env var (import.meta.env) when available, otherwise fall back to the provided Calendly URL.
// This file exports a helper `openCalendly()` used by CTAs across the site.
export const CALENDLY_URL: string = (import.meta && (import.meta as any).env && (import.meta as any).env.VITE_CALENDLY_URL) ||
  "https://calendly.com/richards-javier/30min";

export function openCalendly(url?: string) {
  const target = url || CALENDLY_URL;
  // open in a new tab/window to avoid cross-origin issues
  window.open(target, "_blank", "noopener,noreferrer");
}

export default openCalendly;
