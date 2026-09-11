import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home, FolderGit2, Compass, Shapes, Newspaper, Mail } from "lucide-react";
import { profile } from "../data/content";

// Full set — used for the desktop pill nav and the mobile overlay menu.
const LINKS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Work", icon: FolderGit2 },
  { id: "perspectives", label: "How I Think", icon: Compass },
  { id: "about", label: "About", icon: Shapes },
  { id: "blog", label: "Blog", icon: Newspaper },
  { id: "contact", label: "Contact", icon: Mail },
];

// Trimmed set for the mobile sticky bottom bar, so it stays uncluttered.
const BOTTOM_LINKS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Work", icon: FolderGit2 },
  { id: "about", label: "About", icon: Shapes },
  { id: "contact", label: "Contact Me", icon: Mail },
];

function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function jumpTo(id, close) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  close?.();
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop top bar */}
      <header
        className={`fixed inset-x-0 top-0 z-40 hidden justify-center transition-all duration-500 md:flex ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <nav
          className={`glass flex items-center gap-1 rounded-full px-2 py-2 shadow-glass transition-all duration-500 ${
            scrolled ? "scale-[0.97]" : ""
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              jumpTo("hero");
            }}
            className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 font-mono text-xs font-semibold text-accent"
          >
            {profile.initials}
          </a>
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => jumpTo(l.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === l.id ? "text-ink-950" : "text-ink-200 hover:text-ink-50"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 pt-[max(1rem,env(safe-area-inset-top))] md:hidden">
        <a href="#hero" className="glass flex h-11 w-11 items-center justify-center rounded-full font-mono text-xs font-semibold text-accent">
          {profile.initials}
        </a>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-50"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-[max(1.25rem,env(safe-area-inset-top))]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-50"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  onClick={() => jumpTo(l.id, () => setOpen(false))}
                  className="min-h-[44px] py-2 font-serif text-4xl text-ink-100 transition-colors active:text-accent"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4 px-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
              <a href={profile.github} target="_blank" rel="noreferrer" className="chip min-h-[44px] px-4 py-2.5">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="chip min-h-[44px] px-4 py-2.5">
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom nav (native-app feel) */}
      <nav className="fixed inset-x-0 bottom-0 z-40 md:hidden">
        <div className="mx-3 mb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-1 rounded-2xl glass-strong px-2 py-2 shadow-glass">
          {BOTTOM_LINKS.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.id;
            return (
              <button
                key={l.id}
                onClick={() => jumpTo(l.id)}
                className="relative flex min-h-[44px] flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5"
              >
                {isActive && (
                  <motion.span
                    layoutId="bottom-nav-pill"
                    className="absolute inset-0 rounded-xl bg-accent/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon size={20} className={`relative z-10 ${isActive ? "text-accent" : "text-ink-300"}`} />
                <span className={`relative z-10 text-[0.65rem] font-medium ${isActive ? "text-accent" : "text-ink-400"}`}>
                  {l.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}