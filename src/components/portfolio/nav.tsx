"use client";

/**
 * Nav — fixed header: serif wordmark (roman+italic), numbered links with
 * rolling hover fill, live local time (guglieri), availability pill with a
 * pulsing COPPER dot (never green), full-screen mobile overlay menu.
 */
import { useEffect, useState } from "react";
import Link from "./Link";
function usePathname() {
  const [pathname, setPathname] = useState(() => {
    if (typeof window === "undefined") return "/";
    return window.location.hash.replace("#", "") || "/";
  });
  useEffect(() => {
    const handle = () => setPathname(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);
  return pathname;
}
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/profile";

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: profile.timezone,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useLocalTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled ? "bg-bone/85 backdrop-blur-md border-b border-ink/8" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[100rem] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          {/* wordmark */}
          <Link href="/" className="group font-display text-xl leading-none text-ink md:text-2xl">
            {profile.wordmark.roman}
            <span className="italic text-copper">{profile.wordmark.italic}</span>
            <span className="ml-1 align-super font-label text-[9px] text-taupe">©</span>
          </Link>

          {/* center meta (desktop) */}
          <div className="hidden items-center gap-8 font-label text-[10px] uppercase tracking-[0.22em] text-taupe lg:flex">
            <span>
              Local — <span className="text-ink">{time || "··:··"}</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-copper" />
              </span>
              {profile.availability}
            </span>
          </div>

          {/* numbered links (desktop) */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {profile.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative font-label text-[11px] uppercase tracking-[0.22em] transition-colors ${
                    active ? "text-copper" : "text-ink hover:text-copper"
                  }`}
                >
                  <span className="mr-1 text-[8px] text-taupe group-hover:text-copper/70">
                    {item.n}
                  </span>
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-copper transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* burger (mobile) */}
          <button
            className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[75] flex flex-col justify-between bg-umber px-6 pb-10 pt-28 text-bone"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 80% 10%, rgba(192,90,46,0.3), transparent 55%)" }} />
            <nav className="relative flex flex-col gap-2" aria-label="Mobile">
              {profile.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-4 py-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-label text-[10px] text-copper">{item.n}</span>
                    <span className="font-display text-5xl transition-colors group-hover:text-copper">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="relative font-label text-[10px] uppercase tracking-[0.22em] text-bone/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>{profile.location}</p>
              <p className="mt-1 text-copper">{profile.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
