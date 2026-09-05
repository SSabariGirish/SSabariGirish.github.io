import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import {
  profile,
  caseStudies,
  otherProjects,
  perspectives,
  timeline,
  certifications,
  skillGroups,
  interests,
} from "./content";

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "thinking", label: "How I Think" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

// Light by default, always — we only switch to dark if the person asks,
// and we remember that choice for their next visit via localStorage.
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore — theme just won't persist
    }
  }, [theme]);

  return [theme, setTheme];
}

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <circle cx="10" cy="10" r="4" />
          <path d="M10 1.5V4M10 16V18.5M18.5 10H16M4 10H1.5M15.6 4.4L13.9 6.1M6.1 13.9L4.4 15.6M15.6 15.6L13.9 13.9M6.1 6.1L4.4 4.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 12.5A7.5 7.5 0 018 3a7.5 7.5 0 109 9.5z" />
        </svg>
      )}
    </button>
  );
}

// ---------- Background layers (parallax dot-grid + slow sheen) ----------
function BackgroundLayers({ reducedMotion }) {
  const dotsRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (dotsRef.current) {
          dotsRef.current.style.transform = `translateY(${window.scrollY * -0.04}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return (
    <>
      <div className="bg-dots" ref={dotsRef} aria-hidden="true" />
      <div className="bg-sheen" aria-hidden="true" />
    </>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// Adds `.is-visible` to any element with data-reveal the first time it
// scrolls into view. With reduced motion, everything is visible immediately
// (the CSS also disables the transition, this just skips the round-trip).
function useRevealObserver(reducedMotion) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (reducedMotion) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

// ---------- Case study visuals ----------
// Placeholder abstract diagrams — swap for real screenshots/architecture
// diagrams by replacing <CaseVisual motif="..."/> with an <img> once
// you have real assets. See the note at the top of content.js.
const VISUAL_PATHS = {
  shield: (
    <>
      <path d="M100 30 L160 50 V95 C160 130 130 155 100 170 C70 155 40 130 40 95 V50 Z" />
      <path d="M62 80 H138 M62 98 H138 M62 116 H115" />
      <circle cx="100" cy="52" r="4" className="motif-accent" />
    </>
  ),
  radar: (
    <>
      <circle cx="100" cy="100" r="18" />
      <circle cx="100" cy="100" r="42" />
      <circle cx="100" cy="100" r="66" />
      <path d="M100 100 L138 62" />
      <circle cx="138" cy="62" r="5" className="motif-accent" />
    </>
  ),
  mesh: (
    <>
      <circle cx="55" cy="60" r="6" />
      <circle cx="145" cy="48" r="6" />
      <circle cx="100" cy="105" r="8" className="motif-accent" />
      <circle cx="48" cy="145" r="6" />
      <circle cx="150" cy="150" r="6" />
      <path d="M55 60 L100 105 M145 48 L100 105 M100 105 L48 145 M100 105 L150 150 M55 60 L145 48" />
    </>
  ),
  wicket: (
    <>
      <path d="M75 60 V150 M100 55 V150 M125 60 V150" />
      <path d="M68 60 L82 68 M93 55 L107 63 M118 60 L132 68" />
      <circle cx="150" cy="110" r="5" className="motif-accent" />
      <path d="M150 110 L132 100" />
    </>
  ),
};

function CaseVisual({ motif }) {
  return (
    <svg
      className="case-visual"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {VISUAL_PATHS[motif]}
    </svg>
  );
}

// ---------- "How I Think" column icons ----------
// Blue Team reuses the shield language from Wards and Firewalls (same
// visual grammar, deliberately). Red Team and Secure SWE are new: a
// crosshair for offense, and code brackets guarding a small lock for
// secure development.
const PERSPECTIVE_ICONS = {
  blueTeam: (
    <>
      <path d="M24 4 L40 10 V24 C40 34 33 40 24 44 C15 40 8 34 8 24 V10 Z" />
      <path d="M16 22 H32 M16 28 H32" />
      <circle cx="24" cy="11" r="2" className="motif-accent" />
    </>
  ),
  redTeam: (
    <>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 2 V10 M24 38 V46 M2 24 H10 M38 24 H46" />
      <circle cx="24" cy="24" r="2" className="motif-accent-fill" />
    </>
  ),
  secureSwe: (
    <>
      <path d="M16 14 L6 24 L16 34" />
      <path d="M32 14 L42 24 L32 34" />
      <rect x="20" y="20" width="8" height="7" rx="1" />
      <path d="M22 20 V17 C22 15 26 15 26 17 V20" />
      <circle cx="24" cy="23.5" r="1.2" className="motif-accent-fill" />
    </>
  ),
};

function PerspectiveIcon({ icon }) {
  return (
    <svg
      className="perspective-icon"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PERSPECTIVE_ICONS[icon]}
    </svg>
  );
}

// ---------- Header ----------
function Header({ activeSection, onSearchClick, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--visible" : ""}`}>
      <a href="#top" className="site-header__mark">{profile.initials}</a>
      <nav className="site-header__nav">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "is-active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="site-header__actions">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <button className="site-header__search" onClick={onSearchClick} aria-label="Search">
          <kbd>⌘K</kbd>
        </button>
      </div>
    </header>
  );
}

// A larger decorative schematic for the empty right side of the hero —
// same visual language as the case-study motifs (thin lines, one gold
// accent), just bigger and lower-opacity so it reads as texture rather
// than a fourth thing competing with the headline. Hidden on narrow
// screens where there's no spare room for it anyway.
function HeroGraphic() {
  return (
    <svg
      className="hero__graphic"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="399" height="399" rx="28" className="motif-frame" />
      <circle cx="200" cy="200" r="55" />
      <circle cx="200" cy="200" r="105" />
      <circle cx="200" cy="200" r="155" />
      <path d="M200 200 L285 125" />
      <circle cx="285" cy="125" r="5" className="motif-accent" />
      <path d="M130 295 L200 200 M200 200 L305 250" />
      <circle cx="130" cy="295" r="4" />
      <circle cx="305" cy="250" r="4" />
    </svg>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="top" className="hero">
      <HeroGraphic />
      <p className="hero__meta" data-reveal style={{ transitionDelay: "0ms" }}>
        {profile.name} — {profile.title} — {profile.location}
      </p>
      <h1 className="hero__headline">
        {profile.heroLines.map((line, i) => (
          <span className="hero__line-wrap" key={line}>
            <span
              className="hero__line"
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>
      <p className="hero__sub" data-reveal style={{ transitionDelay: "280ms" }}>
        {profile.heroSub}
      </p>
    </section>
  );
}

// ---------- Case study (expandable) ----------
function CaseStudy({ study, reversed }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`case-study ${reversed ? "case-study--reversed" : ""}`}
      data-reveal
    >
      <button
        className="case-study__preview"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="case-study__visual">
          <CaseVisual motif={study.visual} />
        </div>
        <div className="case-study__intro">
          <span className="case-study__index">PROJECT / {study.index}</span>
          <h3>{study.name}</h3>
          <p className="case-study__hook">{study.hook}</p>
          {study.badges && (
            <div className="case-study__badges">
              {study.badges.map((b) => (
                <span className="case-study__badge" key={b}>{b}</span>
              ))}
            </div>
          )}
          <span className="case-study__toggle">{open ? "Close case study —" : "Read the case study +"}</span>
        </div>
      </button>

      <div className={`expand-wrap ${open ? "is-open" : ""}`}>
        <div className="expand-inner">
          <div className="case-study__detail">
            <div className="case-study__field">
              <h4>The problem</h4>
              <p>{study.problem}</p>
            </div>
            <div className="case-study__field">
              <h4>The interesting challenge</h4>
              <p>{study.challenge}</p>
            </div>
            <div className="case-study__field">
              <h4>My approach</h4>
              <p>{study.approach}</p>
            </div>
            <div className="case-study__field">
              <h4>What I built</h4>
              <p>{study.built}</p>
            </div>
            <div className="case-study__field">
              <h4>Result</h4>
              <p>{study.result}</p>
            </div>
            <div className="case-study__field">
              <h4>What I learned</h4>
              <p>{study.learned}</p>
            </div>
            <div className="case-study__footer">
              <span className="case-study__tags">{study.tags.join(" · ")}</span>
              <span className="case-study__footer-links">
                {study.liveUrl && (
                  <a href={study.liveUrl} target="_blank" rel="noreferrer">Play the game ↗</a>
                )}
                <a href={study.url} target="_blank" rel="noreferrer">View on GitHub ↗</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function OtherProjects() {
  return (
    <div className="other-projects" data-reveal>
      <h3>Other work</h3>
      <ul>
        {otherProjects.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noreferrer">
              <span className="other-projects__name">{p.name}</span>
              <span className="other-projects__desc">{p.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="section work">
      <p className="section__kicker" data-reveal>What I build</p>
      <h2 className="section__title" data-reveal>
        Intelligent, scalable security applications powered by actionable threat telemetry.
      </h2>
      <div className="case-study-list">
        {caseStudies.map((study, i) => (
          <CaseStudy study={study} key={study.id} reversed={i % 2 === 1} />
        ))}
      </div>
      <OtherProjects />
    </section>
  );
}

// ---------- How I Think (scroll-linked methodology) ----------
function MethodologyStep({ step, index, isLast }) {
  return (
    <div className="method-step" data-reveal>
      <div className="method-step__rail">
        <span className="method-step__number">{String(index + 1).padStart(2, "0")}</span>
        {!isLast && <span className="method-step__line" />}
      </div>
      <div className="method-step__body">
        <h4>{step.title}</h4>
        <p>{step.description}</p>
      </div>
    </div>
  );
}

function HowIThink() {
  return (
    <section id="thinking" className="section thinking">
      <p className="section__kicker" data-reveal>How I think</p>
      <h2 className="section__title" data-reveal>
        Three mindsets, one habit of mind.
      </h2>
      <div className="perspectives-grid">
        {perspectives.map((perspective) => (
          <div className="perspective-column" data-reveal key={perspective.id}>
            <div className="perspective-column__header">
              <PerspectiveIcon icon={perspective.icon} />
              <h3>{perspective.title}</h3>
            </div>
            <div className="method-list">
              {perspective.steps.map((step, i) => (
                <MethodologyStep
                  step={step}
                  index={i}
                  isLast={i === perspective.steps.length - 1}
                  key={step.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Timeline ----------
function TimelineEntry({ entry, expanded }) {
  return (
    <div className="timeline-entry" data-reveal>
      <span className="timeline-entry__dates">{entry.dates}</span>
      <div className="timeline-entry__body">
        <h4>{entry.title}</h4>
        <p className="timeline-entry__org">{entry.org} — {entry.detail}</p>
        {entry.bullets && (
          <div className={`expand-wrap ${expanded ? "is-open" : ""}`}>
            <div className="expand-inner">
              <ul className="timeline-entry__bullets">
                {entry.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Timeline() {
  const [expanded, setExpanded] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <section id="timeline" className="section timeline">
      <p className="section__kicker" data-reveal>What I've accomplished</p>
      <h2 className="section__title" data-reveal>
        The version that fits on one page.
      </h2>
      <div className="timeline-list">
        {timeline.map((entry) => (
          <TimelineEntry entry={entry} expanded={expanded} key={entry.title} />
        ))}
      </div>
      <button className="timeline__toggle" onClick={() => setExpanded((v) => !v)} data-reveal>
        {expanded ? "Show less —" : "Show full detail +"}
      </button>

      <div className={`expand-wrap ${expanded ? "is-open" : ""}`} data-reveal>
        <div className="expand-inner">
          <div className="certifications">
            <h4>Certifications</h4>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button className="skills-ref__toggle" onClick={() => setSkillsOpen((v) => !v)} data-reveal>
        {skillsOpen ? "Hide full toolkit —" : "Full toolkit & skill list +"}
      </button>
      <div className={`expand-wrap ${skillsOpen ? "is-open" : ""}`}>
        <div className="expand-inner">
          <div className="skills-ref">
            {skillGroups.map((g) => (
              <div className="skills-ref__group" key={g.title}>
                <h5>{g.title}</h5>
                <p>{g.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Interests ----------
function Interests() {
  return (
    <section className="section interests">
      <p className="section__kicker" data-reveal>What I'm interested in</p>
      <p className="interests__text" data-reveal>{interests}</p>
    </section>
  );
}

// ---------- Contact (magnetic button) ----------
function MagneticLink({ href, children, ...props }) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  }, []);

  return (
    <a
      href={href}
      ref={ref}
      className="magnetic-link"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section__kicker" data-reveal>How to reach me</p>
      <h2 className="section__title" data-reveal>
        Open to cyber security engineering, SOC, and GRC roles.
      </h2>
      <div className="contact__cta" data-reveal>
        <MagneticLink href={`mailto:${profile.email}`}>{profile.email}</MagneticLink>
      </div>
      <div className="contact__links" data-reveal>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>{profile.name}</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

// ---------- Command palette (secondary tool, with a small easter egg) ----------
function buildSearchIndex() {
  const items = [];
  NAV_LINKS.forEach((l) => items.push({ type: "section", label: l.label, target: l.id }));
  caseStudies.forEach((s) =>
    items.push({ type: "project", label: s.name, target: "work" })
  );
  otherProjects.forEach((p) =>
    items.push({ type: "project", label: p.name, target: "work" })
  );
  return items;
}

function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const index = buildSearchIndex();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const isEasterEgg = q === "whoami" || q === "sudo" || q === "hire me";
  const results = q ? index.filter((i) => i.label.toLowerCase().includes(q)).slice(0, 6) : index.slice(0, 6);

  const jump = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          placeholder="Jump to a section or project…"
        />
        {isEasterEgg ? (
          <p className="palette__easter-egg">
            → a cybersecurity engineer who reads design blogs on the weekend.
          </p>
        ) : (
          <ul>
            {results.length === 0 && <li className="palette__empty">No matches</li>}
            {results.map((item) => (
              <li key={`${item.type}-${item.label}`} onClick={() => jump(item.target)}>
                <span className="palette__type">{item.type}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [theme, setTheme] = useTheme();
  const reducedMotion = usePrefersReducedMotion();

  useRevealObserver(reducedMotion);

  useEffect(() => {
    const sections = ["work", "thinking", "timeline", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="page">
      <BackgroundLayers reducedMotion={reducedMotion} />
      <Header
        activeSection={activeSection}
        onSearchClick={() => setPaletteOpen(true)}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero />
      <Work />
      <HowIThink />
      <Timeline />
      <Interests />
      <Contact />
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}