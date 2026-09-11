import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Crosshair, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import { perspectives } from "../data/content";

const ICONS = {
  blueTeam: ShieldCheck,
  redTeam: Crosshair,
  secureSwe: Code2,
};

export default function Perspectives() {
  const [activeId, setActiveId] = useState(perspectives[0].id);
  const active = perspectives.find((p) => p.id === activeId) ?? perspectives[0];

  return (
    <section id="perspectives" className="section-pad py-28 md:py-36">
      <Reveal>
        <p className="kicker">How I think</p>
        <h2 className="mt-4 max-w-2xl font-serif text-fluid-h2 text-ink-50">
          Three hats, one habit of mind.
        </h2>
        <p className="mt-4 max-w-xl text-fluid-body text-ink-300">
          The same problem looks different depending on which side of it you're standing on.
          Here's my actual methodology for each.
        </p>
      </Reveal>

      {/* Tabs */}
      <Reveal delay={0.1} className="mt-10">
        <div
          role="tablist"
          aria-label="Perspective"
          className="flex flex-wrap gap-2 rounded-full border border-ink-700/60 bg-ink-900/40 p-1.5 sm:inline-flex"
        >
          {perspectives.map((p) => {
            const Icon = ICONS[p.icon] || Code2;
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(p.id)}
                className={`relative flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:flex-none ${
                  isActive ? "text-ink-950" : "text-ink-300 hover:text-ink-50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="perspective-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: p.color || "#5EEBD6" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{p.title}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Active perspective content */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 font-serif text-xl text-accent-soft sm:text-2xl">{active.tagline}</p>

            {/* --tint carries this perspective's color, so all 4 step cards
                share one accent without per-card color logic. Hover turns
                the border + a soft outer glow neon, matching the project
                bento cards' hover language. */}
            <div
              style={{ "--tint": active.color || "#5EEBD6" }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {active.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="group relative flex flex-col rounded-2xl border border-ink-700/60 bg-ink-900/40 p-5 transition-all duration-300 hover:bg-ink-900/70 hover:[border-color:var(--tint)] hover:shadow-[0_0_28px_-6px_var(--tint)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-500 transition-colors duration-300 group-hover:[color:var(--tint)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < active.steps.length - 1 && (
                      <span className="hidden h-px flex-1 bg-ink-700/60 sm:mx-3 sm:block" />
                    )}
                  </div>
                  <h4 className="font-serif text-lg text-ink-50 transition-colors duration-300 group-hover:[color:var(--tint)]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}