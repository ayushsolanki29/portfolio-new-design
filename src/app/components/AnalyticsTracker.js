"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname && pathname.startsWith("/admin")) return;

    const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    // Helper to fire events
    const fireEvent = (eventType, metadata = {}) => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: pathname || "/", event_type: eventType, metadata }),
        keepalive: true,
      }).catch(() => {});
    };

    try {
      // 1. Page View Tracking (Footfall)
      const VISIT_KEY = "portfolio_last_visit";
      const lastVisit = localStorage.getItem(VISIT_KEY);
      if (!lastVisit || (now - parseInt(lastVisit, 10)) > THREE_DAYS_MS) {
        fireEvent("page_view");
        localStorage.setItem(VISIT_KEY, now.toString());
      }

      // 2. Engagement Tracking
      const ENGAGEMENT_KEY = "portfolio_last_engagement";
      const lastEngagement = localStorage.getItem(ENGAGEMENT_KEY);
      
      if (!lastEngagement || (now - parseInt(lastEngagement, 10)) > THREE_DAYS_MS) {
        let engaged = false;
        
        const markEngaged = () => {
          if (engaged) return;
          engaged = true;
          fireEvent("engagement");
          localStorage.setItem(ENGAGEMENT_KEY, new Date().getTime().toString());
          
          window.removeEventListener("scroll", handleScroll);
          clearTimeout(timer);
        };

        // Engage if they stay for 10 seconds
        const timer = setTimeout(markEngaged, 10000);

        // Engage if they scroll down significantly
        const handleScroll = () => {
          if (window.scrollY > 200) markEngaged();
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
      }

      // 3. Click Tracking (External Links)
      const handleClick = (e) => {
        const link = e.target.closest('a');
        if (link && link.target === "_blank") {
          fireEvent("click", { url: link.href });
        }
      };
      
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };

    } catch (e) {
      // Ignore local storage errors
    }
  }, [pathname]);

  return null;
}
