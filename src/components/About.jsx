import {
  Server,
  Code2,
  Cloud,
  Target,
  Network,
  ShieldCheck,
  Search,
  Fingerprint,
  Scale,
  Cpu,
  Award,
} from "lucide-react";
import Reveal from "./Reveal";
import { skillGroups, timeline, certifications, profile } from "../data/content";

const ICONS = {
  server: Server,
  code: Code2,
  cloud: Cloud,
  target: Target,
  network: Network,
  shield: ShieldCheck,
  search: Search,
  fingerprint: Fingerprint,
  scale: Scale,
  cpu: Cpu,
};

function SkillCard({ group, index }) {
  const Icon = ICONS[group.icon] || Code2;
  const tint = group.color || "#5EEBD6";
  return (
    <Reveal delay={index * 0.04} className="h-full">
      <div
        style={{ "--tint": tint }}
        className="group h-full rounded-2xl border border-ink-700/60 bg-ink-900/40 p-5 transition-all duration-300 hover:bg-ink-900/70 hover:[border-color:var(--tint)] hover:shadow-[0_0_28px_-6px_var(--tint)]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:[color:var(--tint)]">
          <Icon size={18} />
        </div>
        <h4 className="font-medium text-ink-50 transition-colors duration-300 group-hover:[color:var(--tint)]">
          {group.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">{group.skills.join(" · ")}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad py-28 md:py-36">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* About copy + timeline */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker">About</p>
            <h2 className="mt-4 font-serif text-fluid-h2 text-ink-50">
              I like systems that get harder to break the more you look at them.
            </h2>
            <p className="mt-6 text-fluid-body text-ink-300">
              I'm Sabari Girish Srinivasan, a Cyber Security Engineer based in London. 
              My work sits directly between blue-team defence, red-team thinking, and secure software 
              engineering. Having managed enterprise incident workflows at scale, I've spent as much 
              time reading logs during active triage as I have writing the code that generates them.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
              Path so far
            </h3>
            <ol className="space-y-6 border-l border-ink-700 pl-6">
              {timeline.map((t) => (
                <li key={t.title} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-accent" />
                  {/* High-contrast text: WCAG AA requires >= 4.5:1 against the
                      #0a0a0a background. ink-500/ink-400 (used previously) sit
                      well under that; accent-soft and ink-200/300 clear it. */}
                  <p className="font-mono text-xs font-medium text-accent-soft/90">{t.dates}</p>
                  <p className="mt-1 font-medium text-ink-50">{t.title}</p>
                  <p className="text-sm text-ink-200">{t.org}</p>
                  <p className="mt-1 text-sm text-ink-300">{t.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.15} className="mt-14">
            <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-ink-400">
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-ink-700/60 bg-ink-900/40 px-4 py-3.5 text-base leading-snug text-ink-200 transition-colors duration-300 hover:border-accent/40"
                >
                  <Award size={18} className="mt-0.5 shrink-0 text-accent-dim" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Skills grid */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="kicker">Toolkit</p>
            <h3 className="mt-4 font-serif text-fluid-h3 text-ink-50">
              Skills across the full attack &amp; defence lifecycle.
            </h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skillGroups.map((g, i) => (
              <SkillCard group={g} index={i} key={g.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}