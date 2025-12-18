// GA4 analytics helpers for the marketing site.
// Verification: use GA4 Realtime report and check `window.gtag` in the browser console.

// Reminder: make sure Vercel has NEXT_PUBLIC_GA_MEASUREMENT_ID configured.
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type GAEventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export function pageview(url: string) {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID) return;
  if (!window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function event({ action, category, label, value }: GAEventParams) {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export {};


