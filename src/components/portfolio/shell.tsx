"use client";

/**
 * PortfolioShell — chrome for all portfolio pages: lenis smooth scroll,
 * preloader, nav, footer, custom cursor, film grain. The 28 component demo
 * routes deliberately do NOT use this shell (they keep native scroll + own UI).
 */
import type { ReactNode } from "react";
import { SmoothScroll } from "./smooth-scroll";
import { Preloader } from "./preloader";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { Cursor } from "./cursor";

function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
      }}
      aria-hidden="true"
    />
  );
}

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <div className="relative flex min-h-screen flex-col">
        <Preloader />
        <Cursor />
        <Grain />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default PortfolioShell;
